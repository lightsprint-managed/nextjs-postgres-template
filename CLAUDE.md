# Project conventions

This is a starter template. Edit anything freely as per the user requests.

## Package manager

Use **bun**, not npm.

```bash
bun install          # install deps
bun run dev          # start dev server
bun run typecheck    # type-check (tsc --noEmit) — use this to validate changes
# bun run build      # DISABLED in this template — breaks the live preview, see below
bun run db:setup     # migrate + seed
bun run db:migrate   # apply migrations
bun run db:seed      # seed data
bun run db:generate  # generate migration after schema change
```

## Validating changes

Run `bun run typecheck` to check your work. This starter has no lint or test
suite — `typecheck` is the check. Do not invent lint/test commands.

**Do NOT run `bun run build` (`next build`) in the workspace.** The dev server
(`bun run dev`) is already running and serving the live preview from `.next/`.
A production build overwrites `.next/`, which corrupts the running dev server
and takes the preview down until it is restarted. `build` is for CI/deploys
only. To validate changes, use `bun run typecheck`.

## Admin panel

- Route: `/admin`
- Credentials: `admin@admin.com` / `password`
- Protected by role check in `app/admin/layout.tsx`

## Stack

- Next.js 15 (Turbopack)
- React 19, TypeScript, Tailwind CSS
- Auth.js (next-auth v5 beta) with credentials provider
- Drizzle ORM + Neon Postgres
- Shadcn UI components in `components/ui/`
