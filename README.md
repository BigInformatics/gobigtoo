# GoBig

Foundational framework for building apps in the organization.

## Features

- **Astro** - Modern web framework
- **Better Auth** - Complete authentication solution with email/password
- **Drizzle ORM** - Type-safe database ORM
- **Stripe** - Payment processing library
- **Chakra UI v3** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Bun/Node** - Runtime support

## Database Schema

- **Users** - User accounts with Better Auth integration
- **Sessions** - Active user sessions
- **Accounts** - OAuth provider accounts
- **Verification Tokens** - Email verification tokens
- **Settings** - User preferences and settings
- **Subscriptions** - Stripe subscription management

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BigInformatics/gobig.git
cd gobig
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and add your configuration
```

4. Initialize the database:
```bash
npm run db:push
```

### Development

Start the development server:

```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:4321`

## Database Management

- **Generate migrations**: `npm run db:generate`
- **Push schema**: `npm run db:push`
- **Migrate**: `npm run db:migrate`
- **Studio**: `npm run db:studio` - Open Drizzle Studio

## Pages

- `/` - Main landing page
- `/login` - User login
- `/signup` - User registration
- `/app` - Protected application page (requires authentication)

## API Routes

- `/api/auth/*` - Better Auth endpoints (sign in, sign up, sign out, session management)

## Building for Production

```bash
npm run build
npm run preview
```

## Environment Variables

See `.env.example` for all available environment variables:

- `DATABASE_URL` - Database connection string
- `BETTER_AUTH_SECRET` - Secret key for Better Auth
- `BETTER_AUTH_URL` - Application URL
- `STRIPE_SECRET_KEY` - Stripe secret key (optional)
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key (optional)

## License

MIT

