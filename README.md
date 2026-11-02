# Proyek Belajar: Bun + ElysiaJS + Drizzle + MySQL

Boilerplate backend API menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Prasyarat
- [Bun](https://bun.sh/) (v1.0+)
- Server MySQL yang sedang berjalan

## Instalasi

1. Salin file environment:
   ```bash
   cp .env.example .env
   ```
2. Sesuaikan konfigurasi database di `.env`:
   ```env
   PORT=3000
   DATABASE_URL=mysql://root:password@localhost:3306/proyek_belajar
   ```
3. Install dependencies:
   ```bash
   bun install
   ```

## Menjalankan Aplikasi

- **Mode Development:**
  ```bash
  bun run dev
  ```
- **Typecheck:**
  ```bash
  bun run typecheck
  ```

## Database Migration (Drizzle Kit)

- **Generate migration file:**
  ```bash
  bun run db:generate
  ```
- **Run migration:**
  ```bash
  bun run db:migrate
  ```
- **Drizzle Studio:**
  ```bash
  bun run db:studio
  ```
