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
- `TOKEN_SECRET` token secret key
- `TOKEN_VECTOR` token initialization vector

### Scripts 

```bash
npm run script <path_to_file> - runs script
```

- `pg-create-schema.ts` creates initial DB schema
- `pg-update-schema.ts` updates initial DB schema

```bash
npm run dev
```

### Postgres

- `psql -U <user>`
  - `CREATE DATABASE <db_name>;`
  - `CREATE USER <user_name> WITH ENCRYPTED PASSWORD '<password>'`
  - `\c <db_name>;`
  - `GRANT ALL ON SCHEMA public TO <user_name>;`
  - ` \c <database> <user>;`

#### Create db for the project

- `psql -U postgres` connect to db
    - `CREATE DATABASE sypien_dojo;`
    - `CREATE USER sypien_dojo WITH ENCRYPTED PASSWORD 'admin';`
    - `\c sypien_dojo;`
    - `GRANT ALL ON SCHEMA public TO sypien_dojo;`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
