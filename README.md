# Expense Tracker (Next.js, TypeScript, Postgres & Clerk)




## Usage

### Install dependencies:

```bash
npm install
```

### Add Environment Variables:

Rename the `.env.example` file to `.env.local` and add the following values:

- `DATABASE_URL`: Your db from postgress 
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk public frontend API key from https://dashboard.clerk.dev/settings/api-keys
- `CLERK_SECRET_KEY`: Your Clerk secret key from https://dashboard.clerk.dev/settings/api-keys

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
