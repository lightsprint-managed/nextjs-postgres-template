# Next.js + PostgreSQL Starter

A full-stack Next.js 15 starter with email/password authentication, PostgreSQL, and an admin dashboard.

## Stack

- **Framework** - [Next.js 15 (App Router)](https://nextjs.org)
- **Language** - [TypeScript](https://www.typescriptlang.org)
- **Auth** - [Auth.js](https://authjs.dev) with email/password credentials
- **Database** - [PostgreSQL](https://www.postgresql.org/) via [Neon](https://neon.tech)
- **ORM** - [Drizzle](https://orm.drizzle.team)
- **Styling** - [Tailwind CSS](https://tailwindcss.com)
- **Components** - [Shadcn UI](https://ui.shadcn.com/)

## Getting Started

1. Create a PostgreSQL database (e.g. on [Neon](https://neon.tech))

2. Copy `.env.example` to `.env` and set your values:

```bash
cp .env.example .env
```

3. Create the database tables:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TYPE status AS ENUM ('active', 'inactive', 'archived');

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  name TEXT NOT NULL,
  status status NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  stock INTEGER NOT NULL,
  available_at TIMESTAMP NOT NULL
);
```

4. Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

5. Open http://localhost:3000 and create an account.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `AUTH_SECRET` | Random secret for signing tokens ([generate one](https://generate-secret.vercel.app/32)) |
