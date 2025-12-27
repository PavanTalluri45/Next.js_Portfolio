This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Standard Development (without Docker)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker Setup

This project includes Docker support with optimized multi-stage builds for both development and production environments.

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

### Development Mode (with hot-reload)

```bash
# Build and run the development container
npm run docker:dev

# Or using docker-compose directly
docker-compose up dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) with hot-reload enabled.

### Production Mode

```bash
# Build the production image
npm run docker:build:prod

# Run the production container
npm run docker:prod

# Or combine both steps
docker-compose up --build prod
```

### Useful Docker Commands

```bash
# Build all images
npm run docker:build

# Stop containers
npm run docker:down

# Clean up containers, volumes, and images
npm run docker:clean

# View running containers
docker ps

# View container logs
docker-compose logs -f dev  # or prod
```

### Docker Architecture

This project uses a **multi-stage Dockerfile** with the following stages:

1. **base**: Base Node.js Alpine image
2. **deps**: Install dependencies
3. **builder**: Build the Next.js application
4. **production**: Minimal production image (~100MB smaller)
5. **development**: Development image with hot-reload support

Benefits:
- ✅ Smaller production images
- ✅ Faster builds with layer caching
- ✅ Separate dev/prod environments
- ✅ Secure (runs as non-root user)
- ✅ Optimized with Next.js standalone output

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

