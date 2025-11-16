# GoBig Architecture

## Overview

GoBig is a foundational framework template for building modern web applications. It combines the best tools in the JavaScript ecosystem to provide a robust, type-safe, and scalable starting point.

## Technology Stack

### Core Framework
- **Astro 4.16.19**: Modern web framework with SSR support
  - Server-side rendering enabled
  - Node.js adapter for production deployment
  - File-based routing
  - Component islands architecture

### Authentication
- **Better Auth 1.3.34**: Complete authentication solution
  - Email/password authentication
  - Session management
  - Secure password hashing
  - CSRF protection
  - Extensible for OAuth providers

### Database
- **Drizzle ORM 0.44.7**: Type-safe ORM
  - SQLite for local development
  - Type-safe queries
  - Migration system
  - Schema validation
  - Easy to switch to PostgreSQL/MySQL for production

### Payment Processing
- **Stripe 19.3.1**: Payment infrastructure
  - Ready for subscription management
  - Customer management
  - Webhook support

### UI Frameworks
- **Chakra UI 3.29.0**: Component library
  - Accessible components
  - Theme customization
  - Responsive design utilities

- **Tailwind CSS 3.x**: Utility-first CSS
  - Rapid UI development
  - Custom design system support
  - Production optimizations

### Type Safety
- **TypeScript 5.7.2**: Static typing
  - Strictest mode enabled
  - Full type coverage
  - Enhanced IDE support

## Project Structure

```
gobig/
├── src/
│   ├── pages/              # Astro pages (routes)
│   │   ├── index.astro     # Landing page
│   │   ├── login.astro     # Login page
│   │   ├── signup.astro    # Signup page
│   │   ├── app.astro       # Protected app page
│   │   └── api/            # API routes
│   │       └── auth/       # Better Auth endpoints
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro    # Base layout
│   ├── components/         # Reusable components
│   ├── lib/                # Utility functions
│   │   ├── auth.ts         # Better Auth server config
│   │   └── auth-client.ts  # Better Auth client
│   ├── db/                 # Database layer
│   │   ├── schema.ts       # Drizzle schema
│   │   └── index.ts        # Database client
│   ├── styles/             # Global styles
│   │   └── global.css      # Tailwind imports
│   └── env.d.ts            # TypeScript declarations
├── drizzle/                # Database migrations
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
├── drizzle.config.ts       # Drizzle configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables (gitignored)
├── .env.example            # Environment template
└── README.md               # Documentation
```

## Database Schema

### Better Auth Tables (Auto-managed)

#### `user`
- id (primary key)
- name
- email (unique)
- emailVerified
- image
- createdAt
- updatedAt

#### `session`
- id (primary key)
- userId (foreign key → user.id)
- expiresAt
- token (unique)
- ipAddress
- userAgent
- createdAt
- updatedAt

#### `account`
- id (primary key)
- userId (foreign key → user.id)
- accountId
- providerId
- accessToken
- refreshToken
- password (hashed)
- createdAt
- updatedAt

#### `verification`
- id (primary key)
- identifier
- value
- expiresAt
- createdAt
- updatedAt

### Custom Application Tables

#### `settings`
- id (primary key)
- userId (foreign key → user.id, unique)
- theme
- notifications
- language
- createdAt
- updatedAt

#### `subscriptions`
- id (primary key)
- userId (foreign key → user.id)
- stripeCustomerId (unique)
- stripeSubscriptionId (unique)
- stripePriceId
- status
- currentPeriodStart
- currentPeriodEnd
- cancelAtPeriodEnd
- createdAt
- updatedAt

## Authentication Flow

### Sign Up
1. User submits form on `/signup`
2. Client calls Better Auth API: `POST /api/auth/sign-up/email`
3. Better Auth:
   - Validates input
   - Hashes password
   - Creates user record
   - Creates session
4. Returns session token
5. Client stores session
6. Redirects to `/app`

### Login
1. User submits form on `/login`
2. Client calls Better Auth API: `POST /api/auth/sign-in/email`
3. Better Auth:
   - Validates credentials
   - Verifies password hash
   - Creates session
4. Returns session token
5. Client stores session
6. Redirects to `/app`

### Session Management
- Sessions stored in database
- Token sent with each request
- Server validates on protected routes
- Automatic expiry (7 days default)
- Refresh mechanism (updates after 1 day)

### Logout
1. User clicks logout button
2. Client calls Better Auth API: `POST /api/auth/sign-out`
3. Better Auth removes session
4. Client clears local session
5. Redirects to home page

## Protected Routes

Protected routes check for valid session on the server:

```typescript
const session = await auth.api.getSession({
  headers: Astro.request.headers,
});

if (!session) {
  return Astro.redirect('/login');
}
```

## API Routes

All Better Auth routes are handled through: `/api/auth/*`

Available endpoints:
- `POST /api/auth/sign-up/email` - Create account
- `POST /api/auth/sign-in/email` - Login
- `POST /api/auth/sign-out` - Logout
- `GET /api/auth/session` - Get current session
- And more...

## Environment Variables

Required variables (see `.env.example`):

```
DATABASE_URL=file:local.db
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:4321
```

Optional for Stripe:
```
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Build & Deployment

### Development
```bash
# Using Bun (recommended)
bun run dev

# Or using npm
npm run dev
```

### Production Build
```bash
# Using Bun (recommended)
bun run build

# Or using npm
npm run build
```

Output in `dist/`:
- `dist/client/` - Client-side assets
- `dist/server/` - Server-side code

### Preview Production
```bash
# Using Bun (recommended)
bun run preview

# Or using npm
npm run preview
```

## Security Features

1. **Password Security**
   - Bcrypt hashing by Better Auth
   - No plain text storage

2. **Session Security**
   - Secure token generation
   - HTTP-only cookies
   - CSRF protection

3. **Environment Security**
   - Secrets in environment variables
   - .gitignore excludes .env files
   - .env.example for reference

4. **Database Security**
   - Parameterized queries (SQL injection protection)
   - Foreign key constraints
   - Type-safe queries

## Performance Optimizations

1. **Code Splitting**
   - Automatic by Vite
   - Route-based splitting

2. **Asset Optimization**
   - Minification
   - Compression
   - Cache headers

3. **Database**
   - Indexed columns
   - Efficient queries
   - Connection pooling ready

## Extensibility

### Adding OAuth Providers
Better Auth supports:
- Google
- GitHub
- Facebook
- And more...

Add to `src/lib/auth.ts`:
```typescript
export const auth = betterAuth({
  // ... existing config
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
```

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. File name becomes route
3. Use Layout for consistency

### Adding Database Tables
1. Define schema in `src/db/schema.ts`
2. Run `bun run db:generate` (or `npm run db:generate`)
3. Run `bun run db:push` (or `npm run db:push`)

### Adding React Components
1. Create `.tsx` file in `src/components/`
2. Import in `.astro` files
3. Use `client:load` directive for interactivity

## Future Enhancements

Potential additions:
- [ ] Email verification
- [ ] Password reset
- [ ] OAuth providers
- [ ] Role-based access control
- [ ] API rate limiting
- [ ] Logging and monitoring
- [ ] Testing suite (Jest/Vitest)
- [ ] CI/CD pipeline
- [ ] Docker configuration
- [ ] Production database (PostgreSQL)

## Troubleshooting

### Build Fails
- Check TypeScript errors: `bun run astro check` (or `npm run astro check`)
- Clear cache: `rm -rf .astro dist`

### Database Issues
- Reset database: `rm local.db && bun run db:push` (or `npm run db:push`)
- View schema: `bun run db:studio` (or `npm run db:studio`)

### Authentication Issues
- Check BETTER_AUTH_SECRET is set
- Verify BETTER_AUTH_URL matches your domain
- Clear browser cookies

## Support

For issues or questions:
1. Check TESTING.md for testing procedures
2. Review README.md for setup instructions
3. Check Astro docs: https://docs.astro.build
4. Check Better Auth docs: https://better-auth.com
5. Check Drizzle docs: https://orm.drizzle.team
