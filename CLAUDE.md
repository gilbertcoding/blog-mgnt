# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

인형공예 홍보 및 작품전시를 위한 블로그. Next.js 15 App Router 기반으로 Supabase DB를 사용하여 작품과 블로그 포스트를 관리한다.

## 개발 명령어

```bash
npm run dev        # 개발 서버 실행 (localhost:3000)
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 검사
```

## 기술 스택

- **프레임워크**: Next.js 15 (App Router), React 19, TypeScript
- **스타일**: Tailwind CSS, shadcn/ui
- **DB**: Supabase (작품, 블로그 포스트 저장)
- **상태관리**: Zustand (갤러리 필터/정렬 상태)
- **폼**: React Hook Form + Zod
- **이미지**: Next.js `next/image` + yet-another-react-lightbox
- **이메일**: Resend (문의 폼 발송)

## 아키텍처

### 라우트 구조 (App Router)

| 경로            | 설명                                           |
| --------------- | ---------------------------------------------- |
| `/`             | 메인 홈 (히어로 + 최근 작품 + 블로그 미리보기) |
| `/gallery`      | 작품 갤러리 목록 (필터/정렬 포함)              |
| `/gallery/[id]` | 작품 상세 (라이트박스 이미지)                  |
| `/blog`         | 블로그 포스트 목록                             |
| `/blog/[slug]`  | 블로그 포스트 상세                             |
| `/contact`      | 이메일 문의 폼                                 |
| `/api/contact`  | 문의 이메일 발송 API Route                     |

### Supabase 데이터 모델

**`artworks`** — 작품 정보

- `id` (uuid), `title`, `description`, `image_url`, `category`, `created_at`

**`posts`** — 블로그 포스트

- `id` (uuid), `title`, `slug`, `content` (Markdown), `thumbnail_url`, `published_at`

### Supabase 클라이언트 분리

- `src/lib/supabase/client.ts` — 브라우저 컴포넌트용 (`createBrowserClient`)
- `src/lib/supabase/server.ts` — 서버 컴포넌트 / API Route용 (`createServerClient`)

서버 컴포넌트에서는 반드시 `server.ts`를 사용할 것.

### 상태관리 (Zustand)

`src/store/galleryStore.ts`에서 갤러리 필터(카테고리)와 정렬(최신순/오래된순) 상태를 관리한다.

## 환경 변수

`.env.local` 필요:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
CONTACT_EMAIL=
```

## 코딩 규칙

- **절대 모킹하지 않기**: 실제 동작하는 코드만 작성
- **오버엔지니어링 금지**: 구현을 원하는 명확한 기능만 구현, 임의로 구현 금지, 오버해서 구현 금지.
- **네이밍 규칙**: 기능을 명확히 나타내는 이름 사용
- **라이브러리** : 라이브러리의 경우 최신 버전 지향
- `any` 타입 사용 금지 — `src/types/`에 타입 정의
- 서버 컴포넌트 기본, 상호작용이 필요한 경우에만 `"use client"` 추가
- 이미지는 항상 `next/image` 사용 (외부 이미지는 `next.config.ts`에 도메인 등록 필요)
- shadcn/ui 컴포넌트는 `src/components/ui/`에 위치
