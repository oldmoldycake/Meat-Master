# STAGE 1: The Builder
FROM oven/bun:1 
WORKDIR /app

# Copy dependency files first
COPY package.json bun.lock ./
RUN bun install

