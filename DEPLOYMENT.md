# Deployment Guide for Vercel

This guide will help you deploy your Next.js application with Neon and Prisma to Vercel.

## Prerequisites

1. **Neon Database Account**: Sign up at [neon.tech](https://neon.tech)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **GitHub Repository**: Your code should be in a GitHub repository

## Step 1: Set Up Neon Database

1. **Create a Neon Project**:

   - Go to [console.neon.tech](https://console.neon.tech)
   - Create a new project
   - Choose a region close to your users
   - Note down your connection string

2. **Configure Database**:

   ```bash
   # Set your DATABASE_URL
   export DATABASE_URL="postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"

   # Push your schema to Neon
   npm run db:push

   # Optional: Seed your database
   npm run db:seed
   ```

## Step 2: Prepare Your Code

1. **Environment Variables**:

   - Create a `.env.local` file (for local development)
   - Add your environment variables:

   ```env
   DATABASE_URL="your-neon-connection-string"
   NEXT_PUBLIC_APP_NAME="Prostore"
   NEXT_PUBLIC_APP_DESCRIPTION="A modern ecommerce store built with Next.js"
   NEXT_PUBLIC_SERVER_URL="https://your-app.vercel.app"
   ```

2. **Test Locally**:
   ```bash
   npm install
   npm run build
   npm run start
   ```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

### Option B: Deploy via GitHub Integration

1. **Connect Repository**:

   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:

   - In Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:
     - `DATABASE_URL`: Your Neon connection string
     - `NEXT_PUBLIC_APP_NAME`: Your app name
     - `NEXT_PUBLIC_APP_DESCRIPTION`: Your app description
     - `NEXT_PUBLIC_SERVER_URL`: Your Vercel domain (will be auto-generated)

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

## Step 4: Post-Deployment

1. **Verify Database Connection**:

   - Check your app is running
   - Test database operations
   - Monitor logs in Vercel dashboard

2. **Set Up Custom Domain** (Optional):

   - In Vercel dashboard, go to "Domains"
   - Add your custom domain
   - Update `NEXT_PUBLIC_SERVER_URL` environment variable

3. **Monitor Performance**:
   - Use Vercel Analytics
   - Monitor Neon database usage
   - Set up alerts for errors

## Environment Variables Reference

| Variable                      | Description                     | Required | Example                                                                        |
| ----------------------------- | ------------------------------- | -------- | ------------------------------------------------------------------------------ |
| `DATABASE_URL`                | Neon database connection string | Yes      | `postgresql://user:pass@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require` |
| `NEXT_PUBLIC_APP_NAME`        | Application name                | No       | `Prostore`                                                                     |
| `NEXT_PUBLIC_APP_DESCRIPTION` | Application description         | No       | `A modern ecommerce store`                                                     |
| `NEXT_PUBLIC_SERVER_URL`      | Application URL                 | No       | `https://prostore.vercel.app`                                                  |

## Troubleshooting

### Common Issues

1. **Database Connection Errors**:

   - Verify `DATABASE_URL` is correct
   - Check Neon database is active
   - Ensure connection string includes `?sslmode=require`

2. **Build Failures**:

   - Check Prisma client generation
   - Verify all dependencies are installed
   - Check for TypeScript errors

3. **Runtime Errors**:
   - Check Vercel function logs
   - Verify environment variables are set
   - Check Neon database logs

### Debug Commands

```bash
# Check Prisma connection
npx prisma db pull

# Generate Prisma client
npx prisma generate

# Check database status
npx prisma db push --preview-feature

# View Prisma Studio
npx prisma studio
```

## Performance Optimization

1. **Database Connection Pooling**:

   - Neon automatically handles connection pooling
   - Monitor connection usage in Neon dashboard

2. **Caching**:

   - Use Next.js caching strategies
   - Implement Redis for session storage if needed

3. **CDN**:
   - Vercel automatically provides CDN
   - Optimize images with Next.js Image component

## Security Considerations

1. **Environment Variables**:

   - Never commit `.env` files
   - Use Vercel's environment variable encryption
   - Rotate database credentials regularly

2. **Database Security**:

   - Use SSL connections (`sslmode=require`)
   - Implement proper access controls
   - Monitor database access logs

3. **API Security**:
   - Implement rate limiting
   - Use proper authentication
   - Validate all inputs

## Monitoring and Maintenance

1. **Set Up Monitoring**:

   - Vercel Analytics
   - Neon monitoring
   - Error tracking (Sentry, etc.)

2. **Regular Maintenance**:

   - Update dependencies
   - Monitor database performance
   - Review and optimize queries

3. **Backup Strategy**:
   - Neon provides automatic backups
   - Consider additional backup solutions
   - Test restore procedures

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Neon Documentation**: [neon.tech/docs](https://neon.tech/docs)
- **Prisma Documentation**: [prisma.io/docs](https://prisma.io/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
