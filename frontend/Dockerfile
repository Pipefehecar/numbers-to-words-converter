# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder

# Set environment variables for the build process
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app in production
FROM node:18-alpine

# Set workindir
WORKDIR /app

# Copy only the build output and dependencies from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Set runtime environment variables
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
