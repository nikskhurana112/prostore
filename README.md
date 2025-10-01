# Prostore - Modern E-commerce Store

A modern e-commerce store built with Next.js 15, Neon Database, and Prisma.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: Neon (PostgreSQL)
- **ORM**: Prisma with Neon adapter
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Neon database account

### Environment Setup

1. Copy the environment variables:

```bash
cp .env.example .env.local
```

2. Update `.env.local` with your actual values:

```env
DATABASE_URL="postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
NEXT_PUBLIC_APP_NAME="Prostore"
NEXT_PUBLIC_APP_DESCRIPTION="A modern ecommerce store built with Next.js"
NEXT_PUBLIC_SERVER_URL="https://your-domain.vercel.app"
```

### Installation

1. Install dependencies:

```bash
npm install
```

2. Generate Prisma client:

```bash
npm run postinstall
```

3. Push database schema to Neon:

```bash
npm run db:push
```

4. Seed the database (optional):

```bash
npm run db:seed
```

5. Start the development server:

```bash
npm run dev
```

## Database Commands

- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:deploy` - Deploy migrations to production
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## Deployment to Vercel

### 1. Prepare for Production

1. Set up your Neon database:

   - Create a new project in Neon
   - Copy the connection string
   - Update your environment variables

2. Run database migrations:

```bash
npm run db:deploy
```

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:

   - `DATABASE_URL`: Your Neon connection string
   - `NEXT_PUBLIC_APP_NAME`: Your app name
   - `NEXT_PUBLIC_APP_DESCRIPTION`: Your app description
   - `NEXT_PUBLIC_SERVER_URL`: Your Vercel domain

3. Deploy!

### 3. Post-Deployment

1. Verify your database connection
2. Run any necessary migrations
3. Seed production data if needed

## Project Structure

```
prostore/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utility functions and configurations
│   ├── db.ts              # Database connection setup
│   ├── actions/           # Server actions
│   └── constants/         # App constants
├── prisma/                # Prisma schema and migrations
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## Key Features

- Server-side rendering with Next.js App Router
- Database integration with Neon and Prisma
- Responsive design with Tailwind CSS
- Modern UI components with Radix UI
- Type-safe database operations
- Production-ready configuration

## Environment Variables

| Variable                      | Description                     | Required |
| ----------------------------- | ------------------------------- | -------- |
| `DATABASE_URL`                | Neon database connection string | Yes      |
| `NEXT_PUBLIC_APP_NAME`        | Application name                | No       |
| `NEXT_PUBLIC_APP_DESCRIPTION` | Application description         | No       |
| `NEXT_PUBLIC_SERVER_URL`      | Application URL                 | No       |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
