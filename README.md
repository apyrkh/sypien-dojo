# Wrocławski Klub Karate Kyokushin - Sypień Dojo

## Getting Started

### Env variables

- `NEXTAUTH_URL` path to app (domain) for next auth
- `NEXTAUTH_SECRET` secret for next auth
- `DATABASE_URL` path to PostgreSQL
- `DATABASE_NAME` name of database
- `FACEBOOK_ID` facebook app ID
- `FACEBOOK_SECRET` facebook app secret
- `FACEBOOK_WATCHED_PAGES_IDS` comma-separated list of watched facebook pages

### Scripts 

```bash
npm run script <path_to_file> - runs script
```

- `pg-generate-schema.ts` generates initial DB schema

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
