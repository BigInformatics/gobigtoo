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
- **Bun** - Fast JavaScript runtime

## Database Schema

- **Users** - User accounts with Better Auth integration
- **Sessions** - Active user sessions
- **Accounts** - OAuth provider accounts
- **Verification Tokens** - Email verification tokens
- **Settings** - User preferences and settings
- **Subscriptions** - Stripe subscription management

## Getting Started

### Prerequisites

- Bun 1.0+ (https://bun.sh) - Recommended
- Or Node.js 18+ with npm as fallback

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BigInformatics/gobig.git
cd gobig
```

2. Install dependencies:
```bash
# Using Bun (recommended) - generates bun.lockb
bun install

# Or using npm (fallback) - generates package-lock.json
npm install
```

> **Note**: This project uses `bun.lockb` for dependency locking when using Bun. The `package-lock.json` is gitignored to avoid conflicts. If you use Bun, it will automatically create/update `bun.lockb`. If you use npm, it will create `package-lock.json` locally (gitignored).

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and add your configuration
```

4. Initialize the database:
```bash
# Using Bun
bun run db:push

# Or using npm
npm run db:push
```

### Development

Start the development server:

```bash
# Using Bun (recommended)
bun run dev

# Or using npm (fallback)
npm run dev
```

The application will be available at `http://localhost:4321`

## Database Management

Use `bun run` or `npm run` for the following commands:

- **Generate migrations**: `bun run db:generate` or `npm run db:generate`
- **Push schema**: `bun run db:push` or `npm run db:push`
- **Migrate**: `bun run db:migrate` or `npm run db:migrate`
- **Studio**: `bun run db:studio` or `npm run db:studio` - Open Drizzle Studio

## Pages

- `/` - Main landing page
- `/login` - User login
- `/signup` - User registration
- `/app` - Protected application page (requires authentication)

## API Routes

- `/api/auth/*` - Better Auth endpoints (sign in, sign up, sign out, session management)

## Building for Production

```bash
# Using Bun
bun run build
bun run preview

# Or using npm
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

