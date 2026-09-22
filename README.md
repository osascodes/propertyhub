# PropertyHub

A Lagos-focused real estate catalogue built with Next.js, TypeScript, Tailwind CSS, Prisma, and Zod.

**Repository:** https://github.com/osascodes/propertyhub

## Pages

- `/` Home
- `/properties` Browse and filter listings
- `/properties/[slug]` Property details
- `/about` Practice note
- `/contact` Inquiry form
- `/admin/login` Admin sign-in
- `/admin` Dashboard
- `/admin/properties` Listing desk
- `/admin/inquiries` Inquiries

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000

Admin defaults (change in production):

- `xavier.y@example.org`
- `admin1234`

## Database

The public site works immediately from the seeded Lagos portfolio.

To persist listings and inquiries in Supabase PostgreSQL:

1. Create a Supabase project
2. Set `DATABASE_URL`
3. Run `npx prisma generate && npx prisma db push`

## Deploy on Vercel

1. Import https://github.com/osascodes/propertyhub
2. Set `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_SITE_URL`
3. Add `DATABASE_URL` when ready
4. Deploy
