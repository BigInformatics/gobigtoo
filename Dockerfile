# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-slim

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Install production dependencies only
COPY --from=builder /app/node_modules ./node_modules

# Expose port (Astro default is 4321)
EXPOSE 4321

# Set environment to production
ENV HOST=0.0.0.0
ENV PORT=4321

# Start the server
CMD ["bun", "run", "./dist/server/entry.mjs"]
