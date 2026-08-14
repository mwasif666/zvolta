# ZVolta commerce and admin

The public Vite website and the commerce backend are separate applications. The
backend also serves the admin panel, so the public website never contains admin
code or credentials.

## Local development

1. Start MongoDB locally. The development backend uses the copied reference
   credentials first and safely falls back to the local `zvolta` database when
   that remote cluster is unavailable.
2. Seed the initial catalog and create an admin:

   ```powershell
   cd backend
   npm install
   npm run seed -- admin@zvolta.com "choose-a-strong-password"
   npm run dev
   ```

3. In another terminal, start the public site:

   ```powershell
   npm install
   npm run dev
   ```

4. Open `http://localhost:5000/admin/` for admin and
   `http://localhost:5173/products` for the storefront.

The initial seed is idempotent. It can be run again without duplicating the
starter products, blog or videos.

## Production

- Deploy `backend/` to a Node.js host and set the values documented in
  `backend/.env.example`.
- Keep `MONGO_DB_NAME=zvolta`; this prevents shared Mongo credentials from
  mixing ZVolta and InnerBeast data.
- Set `VITE_API_URL=https://your-api-domain/api` before building the public site.
- Change the temporary local admin password before deployment.
- Run `npm audit --omit=dev`, `npm run test:integration`, and the frontend test
  and build commands during release verification.

For an authenticated integration check, set `INTEGRATION_ADMIN_PASSWORD` in the
terminal to the password used during seeding, then run
`npm run test:integration` inside `backend/`.
