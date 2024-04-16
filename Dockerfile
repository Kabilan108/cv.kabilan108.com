# modified from https://andrekoenig.de/articles/using-bun-as-the-package-manager-in-production-ready-docker-images

# ---------------------------------- BUILD ------------------------------------
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as build

WORKDIR /build

# install bun
ARG BUN_VERSION=1.1.3
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


# ---------------------------------- DIST -------------------------------------

FROM node:${NODE_VERSION}-slim as dist
ENV NODE_ENV=production

WORKDIR /app

# copy build artifacts
COPY --from=build --chown=node:node /build/.next ./.next
COPY --from=build --chown=node:node /build/node_modules ./node_modules
COPY --from=build --chown=node:node /build/public ./public
COPY --from=build --chown=node:node /build/next.config.js ./next.config.js
COPY --from=build --chown=node:node /build/package.json ./package.json

RUN chown -R node:node /app

USER node
EXPOSE 3000/tcp
ENTRYPOINT ["npm", "run", "start"]
