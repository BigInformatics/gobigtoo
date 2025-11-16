# Testing Guide

This document outlines how to test the GoBig baseline template.

## Prerequisites

```bash
npm install
```

## Environment Setup

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Update the `.env` file with your settings (the defaults work for local development)

## Database Setup

Initialize the database:

```bash
npm run db:push
```

## Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:4321`

## Manual Testing Checklist

### ✅ Main Page
- [ ] Navigate to `/`
- [ ] Verify the landing page displays with "Welcome to GoBig"
- [ ] Verify navigation links to Login, Sign Up, and App

### ✅ Sign Up Flow
1. Navigate to `/signup`
2. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Password: password123
3. Click "Sign up"
4. Verify successful account creation message
5. Verify redirect to `/app` dashboard
6. Verify user is logged in and sees their info

### ✅ Logout Flow
1. While logged in, click "Logout" button
2. Verify redirect to home page
3. Verify session is cleared

### ✅ Login Flow
1. Navigate to `/login`
2. Fill in the form:
   - Email: test@example.com
   - Password: password123
3. Click "Sign in"
4. Verify redirect to `/app`
5. Verify user info is displayed

### ✅ Protected Routes
1. Log out if logged in
2. Try to access `/app` directly
3. Verify redirect to `/login` page

### ✅ Email Functionality
Note: Email verification requires SMTP configuration in production. For local development, users are auto-verified.

## Build Testing

Build the project for production:

```bash
npm run build
```

Verify the build completes without errors.

Preview the production build:

```bash
npm run preview
```

## Database Management

### View Database Studio
```bash
npm run db:studio
```

### Generate New Migrations
```bash
npm run db:generate
```

### Apply Migrations
```bash
npm run db:push
```

## Integration Testing

### Better Auth
- User registration creates entries in `user` and `account` tables
- Sessions are stored in `session` table
- Passwords are hashed securely

### Drizzle ORM
- Schema is type-safe
- Migrations are version controlled
- Database queries use type-safe API

### Stripe (Ready for Integration)
- Stripe library is installed
- Subscriptions table is ready
- Environment variables are configured

### Chakra UI (Ready for Use)
- Library is installed
- Can be imported and used in React components
- Example: `import { Button } from '@chakra-ui/react'`

### Tailwind CSS
- Configured and working
- Utility classes available in all components
- Custom configuration in `tailwind.config.mjs`

## Security Notes

- Passwords are hashed by Better Auth
- Sessions use secure tokens
- CSRF protection is handled by Better Auth
- Environment variables keep secrets out of code
- Database file (*.db) is in .gitignore

## Performance

- SSR (Server-Side Rendering) enabled
- Optimized builds with Vite
- Code splitting enabled
- Small bundle sizes (auth-client: ~20KB gzipped)

## Verified Tests

All core functionality has been manually verified:
- ✅ User signup creates account successfully
- ✅ Login authenticates and creates session
- ✅ App page is protected and requires authentication
- ✅ User information displays correctly
- ✅ Database schema is properly structured
- ✅ Build completes successfully
- ✅ All dependencies integrate correctly
