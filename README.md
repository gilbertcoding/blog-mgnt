# 인형공예 블로그

인형공예 홍보 및 작품전시를 위한 현대적인 블로그 플랫폼입니다.

## 🎨 프로젝트 소개

이 프로젝트는 인형공예 작가가 자신의 작품을 전시하고 홍보할 수 있는 웹사이트입니다. 
갤러리, 블로그, 문의 폼 등의 기능을 제공합니다.

## 📋 기술 스택

- **프레임워크**: Next.js 15 (App Router), React 19, TypeScript
- **스타일**: Tailwind CSS, shadcn/ui
- **데이터베이스**: Supabase
- **상태관리**: Zustand
- **폼 라이브러리**: React Hook Form + Zod
- **이메일**: Resend
- **이미지 라이트박스**: yet-another-react-lightbox

## 🚀 시작하기

### 1. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 정보를 입력하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

### 2. Supabase 테이블 생성

다음 SQL로 필요한 테이블을 생성하세요:

```sql
-- 작품 테이블
CREATE TABLE artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  category text,
  created_at timestamp DEFAULT now()
);

-- 블로그 포스트 테이블
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  thumbnail_url text,
  published_at timestamp DEFAULT now()
);
```

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인하세요.

## 📁 프로젝트 구조

```
src/
├── app/                 # 페이지 라우트
│   ├── gallery/        # 갤러리 페이지
│   ├── blog/           # 블로그 페이지
│   └── contact/        # 문의 폼 페이지
├── components/         # React 컴포넌트
├── lib/               # 유틸리티 및 설정
│   └── supabase/      # Supabase 클라이언트
├── store/             # Zustand 상태관리
└── types/             # TypeScript 타입 정의
```

## 🔗 페이지 구조

- `/` - 메인 홈
- `/gallery` - 작품 갤러리
- `/gallery/[id]` - 작품 상세
- `/blog` - 블로그 목록
- `/blog/[slug]` - 블로그 상세
- `/contact` - 문의 폼

## 📚 개발 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## 🎯 커스텀 커맨드

### 컴포넌트 생성 제너레이터

React 컴포넌트를 자동으로 생성합니다. TypeScript 타입, Tailwind 스타일이 포함됩니다.

```bash
npm run generate:component <ComponentName> [category]
```

**예시:**

```bash
# gallery 카테고리에 GalleryCard 컴포넌트 생성
npm run generate:component GalleryCard gallery

# 기본 카테고리(ui)에 Button 컴포넌트 생성
npm run generate:component Button
```

생성되는 파일:
- `src/components/<category>/<ComponentName>.tsx`

또는 Claude Code의 `/generate-component` 커맨드를 사용할 수 있습니다.

## 📖 더 알아보기

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능 및 API
- [Supabase 문서](https://supabase.com/docs) - 데이터베이스 관련
- [Tailwind CSS](https://tailwindcss.com/docs) - 스타일링 가이드

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
