# 🛠️ Project Setup: Bun + ElysiaJS + Drizzle + MySQL

## Objective

Inisialisasi project backend API baru menggunakan **Bun** runtime, dengan stack **ElysiaJS** sebagai HTTP framework, **Drizzle ORM** untuk database layer, dan **MySQL** sebagai database.

---

## 1. Inisialisasi Project

- Jalankan `bun init` di folder ini untuk membuat project baru
- Pastikan `package.json` sudah terbuat dengan benar
- Setup TypeScript configuration (`tsconfig.json`) yang compatible dengan Bun

## 2. Install Dependencies

### Production Dependencies
- `elysia` — HTTP framework utama
- `drizzle-orm` — ORM untuk query database
- `mysql2` — MySQL driver untuk koneksi ke database

### Dev Dependencies
- `drizzle-kit` — CLI tool untuk migration & schema management
- `@types/bun` — Type definitions untuk Bun (jika belum ada)

## 3. Struktur Folder

Buat struktur folder berikut:

```
├── src/
│   ├── index.ts          # Entry point, setup Elysia server
│   ├── db/
│   │   ├── index.ts      # Database connection & Drizzle instance
│   │   └── schema.ts     # Drizzle table schemas
│   └── routes/
│       └── index.ts      # Route definitions
├── drizzle.config.ts      # Konfigurasi Drizzle Kit
├── .env                   # Environment variables (DB credentials)
├── .env.example           # Template environment variables
├── package.json
└── tsconfig.json
```

## 4. Konfigurasi Database Connection

- Buat file `.env` dengan variabel: `DATABASE_URL` (format: `mysql://user:password@host:port/database`)
- Buat file `.env.example` sebagai template (tanpa nilai sensitif)
- Setup koneksi MySQL menggunakan `mysql2` driver di `src/db/index.ts`
- Inisialisasi Drizzle ORM instance dengan koneksi tersebut

## 5. Setup Schema Contoh

- Buat minimal 1 tabel contoh di `src/db/schema.ts` (misalnya tabel `users` dengan kolom `id`, `name`, `email`, `created_at`)
- Gunakan Drizzle schema builder (`mysqlTable`, `int`, `varchar`, `timestamp`, dll.)

## 6. Konfigurasi Drizzle Kit

- Buat `drizzle.config.ts` dengan konfigurasi:
  - Dialect: `mysql`
  - Path ke schema file
  - Koneksi database dari environment variable
  - Output folder untuk migration files

## 7. Setup Elysia Server

- Buat entry point di `src/index.ts`
- Inisialisasi Elysia app
- Register routes dari `src/routes/`
- Buat minimal 1 route contoh: `GET /` yang return health check response
- Buat minimal 1 route CRUD sederhana untuk tabel contoh (misal `GET /users`, `POST /users`)
- Server listen di port dari env variable atau default `3000`

## 8. Scripts di package.json

Tambahkan scripts berikut:
- `dev` — Jalankan server dalam mode development dengan hot reload (`bun run --watch`)
- `db:generate` — Generate migration files dari schema (`drizzle-kit generate`)
- `db:migrate` — Jalankan migration ke database (`drizzle-kit migrate`)
- `db:studio` — Buka Drizzle Studio untuk inspect database (`drizzle-kit studio`)

## 9. Finishing

- Pastikan server bisa dijalankan dengan `bun run dev` tanpa error
- Pastikan koneksi ke MySQL berhasil (asumsi MySQL sudah running)
- Tambahkan `.gitignore` yang mencakup `node_modules/`, `.env`, dan folder build

---

> **Catatan:** Tidak perlu implementasi authentication, middleware kompleks, atau error handling advanced. Fokus pada boilerplate yang bersih dan bisa langsung di-extend.
