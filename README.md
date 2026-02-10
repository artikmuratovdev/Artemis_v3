# Artemis v3

Artemis v3 — Vite + React + TypeScript asosidagi loyiha. UI qismi Chakra UI bilan qurilgan va ichki navigatsiya `react-router-dom` orqali boshqariladi.

## Talablar
- Node.js 20+
- npm 10+

## 1) Local setup
1. Dependency o'rnating:
   ```bash
   npm install
   ```
2. Environment fayl yarating:
   ```bash
   cp .env.example .env
   ```
3. `.env` ichiga Supabase qiymatlarini kiriting:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (faqat server context uchun)
4. Development serverni ishga tushiring:
   ```bash
   npm run dev
   ```

## 2) Supabase Auth redirect URL sozlamalari (local + production)
Supabase Dashboard → **Authentication** → **URL Configuration** bo'limida quyidagilarni qo'shing.

### Site URL
- Local: `http://localhost:5173`
- Production: `https://<your-domain>`

### Redirect URLs
- `http://localhost:5173`
- `http://localhost:5173/*`
- `https://<your-domain>`
- `https://<your-domain>/*`

> OAuth provider callback ishlatayotgan bo'lsangiz, provider tomonda ham xuddi shu domain/callback URLlarni moslang.

## 3) Migration qo'llash
Agar Supabase CLI bilan migration yuritsangiz, odatiy oqim:

```bash
# Lokal stack
supabase start

# Yangi migration yaratish
supabase migration new <migration_name>

# Migrationlarni qo'llash (local)
supabase db reset

# Remote loyihaga qo'llash
supabase db push
```

> Eslatma: `supabase db reset` local DBni qayta yaratadi (destructive).

## 4) Role seed qilish
Rollarni seed qilish uchun `supabase/seed.sql` yarating. Supabase CLI local reset paytida shu faylni avtomatik qo'llaydi:

```bash
# Migration + seedni lokalga qo'llash
supabase db reset
```

Production/remote uchun seed SQLni backend job yoki xavfsiz admin pipeline orqali ishga tushiring (service role bilan, lekin clientdan emas).

## 5) Route'lar
Hozirgi client route struktura:
- `/` — asosiy sahifa (`Main_page`)
- `/education/curriculum` — o'quv reja (`Study_plan`)
- `/education/time-table` — dars jadvali (`Time_Table`)

## 6) Service role keydan foydalanish qoidasi
`SUPABASE_SERVICE_ROLE_KEY` **hech qachon** client bundlega chiqmasligi kerak.
Batafsil xavfsizlik qoidalari: [`docs/SUPABASE_SECURITY.md`](docs/SUPABASE_SECURITY.md).

Qisqa qoida:
- `NEXT_PUBLIC_*` faqat browser uchun.
- `SUPABASE_SERVICE_ROLE_KEY` faqat server va CI secret sifatida.

## 7) CI/CD: majburiy secret tekshiruvi
GitHub Actions workflow (`.github/workflows/ci.yml`) quyidagi secretlar yo'qligida buildni to'xtatadi:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Lokalda ham tekshiruvni qo'lda ishga tushirish mumkin:

```bash
./scripts/check-required-env.sh
```

## 8) Netlify deploy eslatmasi
Agar deploy Netlify orqali bo'lsa, `netlify.toml` ichida Node versiya 20 ga pin qilingan.
Netlify UI ichida ham quyidagi Environment variablelarni kiriting:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (faqat server-side ishlar uchun, clientga chiqmasin)

Build command: `npm run build`
Publish directory: `dist`
