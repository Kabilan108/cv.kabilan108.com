ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as build

ARG BUN_VERSION=1.0.20

WORKDIR /build

# install bun
RUN apt update && apt install -y bash curl unzip && \
  curl https://bun.sh/install | bash -s -- bun-v${BUN_VERSION}

ENV PATH="${PATH}:/root/.bun/bin"

# copy lock file, manifest -> install all dependencies
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# copy source code -> build
COPY . .
RUN bun run build

# remove node_modules -> install only prod dependencies
# NB: need to remove cache because bug causes slow installs: 
#     https://github.com/oven-sh/bun/issues/4066
RUN rm -rf node_modules && \
  rm -rf /root/.bun/install/cache/ && \
  bun install --frozen-lockfile --production

# prune md and ts files 
RUN curl -sf https://gobinaries.com/tj/node-prune | sh && \
  node-prune


FROM node:${NODE_VERSION}-slim as dist
ENV NODE_ENV=production

WORKDIR /app

# copy build artifacts
COPY --from=build --chown=node:node /build/.next ./.next
COPY --from=build --chown=node:node /build/node_modules ./node_modules
COPY --from=build --chown=node:node /build/public ./public
COPY --from=build --chown=node:node /build/next.config.js ./next.config.js
# COPY --from=build --chown=node:node /build/postcss.config.js ./postcss.config.js
# COPY --from=build --chown=node:node /build/tailwind.config.js ./tailwind.config.js
COPY --from=build --chown=node:node /build/package.json ./package.json

RUN chown -R node:node /app

USER node
EXPOSE 3000/tcp
ENTRYPOINT ["npm", "run", "start"]

# # use official Bun image
# FROM oven/bun:latest as base
# WORKDIR /usr/src/app

# # install dependencies into temp directory
# # this will cache the dependencies between builds
# FROM base AS install
# RUN mkdir -p /temp/dev
# COPY package.json bun.lockb /temp/dev/
# RUN cd /temp/dev && bun install --frozen-lockfile

# # install with --production (exclude devDependencies)
# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production

# # copy node_modules from temp directory
# FROM base AS prerelease
# COPY --from=install /temp/prod/node_modules node_modules
# COPY . . 

# # build
# ENV NODE_ENV=production
# RUN bun run build

# # copy prod dependencies and source code into final image
# FROM base AS release
# COPY --from=install /temp/prod/node_modules node_modules
# COPY --from=prerelease /usr/src/app .

# # run the app
# USER bun
# EXPOSE 3000/tcp
# ENTRYPOINT ["bun", "start"]
