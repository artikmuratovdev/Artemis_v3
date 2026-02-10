# Supabase service role key: xavfsizlik qoidalari

`SUPABASE_SERVICE_ROLE_KEY` juda yuqori huquqli kalit bo'lib, **faqat server context** ichida ishlatilishi kerak.

## Ruxsat etilgan joylar
- Server-side API endpointlar (Node/Edge function, backend service).
- Serverda ishlaydigan migration/seed ishga tushirish scriptlari.
- CI/CD ichida yopiq secret sifatida.

## Taqiqlangan joylar
- Frontend (`src/` ichidagi browser bundle) ichida to'g'ridan-to'g'ri import qilish.
- `NEXT_PUBLIC_` prefiksi bilan e'lon qilish.
- Clientga JSON response orqali qaytarish.
- Git repositoryga hardcode qilish.

## Tavsiya etilgan amaliyot
- Frontend uchun faqat `NEXT_PUBLIC_SUPABASE_URL` va `NEXT_PUBLIC_SUPABASE_ANON_KEY`dan foydalaning.
- Service role talab qiladigan operatsiyalarni alohida server endpoint orqali bajaring.
- RLS (Row Level Security) ni default yoqilgan holda saqlang.
