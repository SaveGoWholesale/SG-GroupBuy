# GroupBuy (Static HTML + Supabase)

This package contains a single-page **index.html** wired to your Supabase project for:
- **User login** (email/password, persistent session)
- **Inventory** CRUD (products)
- **Create/Join group buys**
- **Request history** (via SQL function)
- **Live chat** per request (Supabase Realtime on `messages`)

## Deploy to Vercel
1. Go to Vercel → **Add New Project → Import → Upload** this folder or the ZIP.
2. Framework preset: **Other (Static HTML)**. No build step.
3. Deploy. (SPA rewrites via `vercel.json` are included.)

## Connect to your Supabase project
1. Create a project at **app.supabase.com**.
2. In **SQL Editor**, paste and run `schema.sql` from this package.
3. In **Authentication → URL Configuration**, add your deployed domain to **Redirect URLs**, e.g.  
   - `https://YOUR-VERCEL-DOMAIN.vercel.app`
   - `https://YOUR-VERCEL-DOMAIN.vercel.app/reset`
4. (Optional) In **Auth → Email Templates**, enable confirmation if you require verified emails.
5. Confirm **Project Settings → API** shows:
   - URL: `https://bwlqwrlsibmqttndymzu.supabase.co`
   - anon key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHF3cmxzaWJtcXR0bmR5bXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MDA0MzcsImV4cCI6MjA3NjA3NjQzN30.QQ8Lncmyl_VfP4a_hc9JP-W9YdlcRl21-8N4LTi2WDM`

## Keys
In `index.html`:
```js
const supabase = createClient("https://bwlqwrlsibmqttndymzu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHF3cmxzaWJtcXR0bmR5bXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MDA0MzcsImV4cCI6MjA3NjA3NjQzN30.QQ8Lncmyl_VfP4a_hc9JP-W9YdlcRl21-8N4LTi2WDM", { auth: { persistSession: true } });
```

## Tables
- `profiles`, `products`, `groupbuys`, `groupbuy_items`, `participants`, `messages` (with RLS).

## Live chat
- Realtime subscription on `messages` with filter per `groupbuy_id`.
