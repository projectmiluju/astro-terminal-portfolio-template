# Astro Terminal Portfolio Template

터미널 감성 UI를 가진 Astro 기반 포트폴리오 + 기술 블로그 템플릿입니다.  
기존 운영 레포에서 실제 프로젝트 소개, 블로그 글, 개인 정보성 콘텐츠를 제거하고, 재사용 가능한 구조만 남긴 버전입니다.

GitHub Pages 배포를 전제로 구성되어 있으며, 프로젝트 소개와 MDX 기반 블로그를 한 저장소에서 운영할 수 있습니다.

## Overview

이 템플릿은 다음 요구를 빠르게 만족시키는 데 초점을 둡니다.

- 포트폴리오와 블로그를 하나의 정적 사이트로 운영
- GitHub Pages에 바로 배포 가능한 Astro 구조 사용
- 프로젝트와 글을 MDX 파일로 관리
- 터미널 스타일의 일관된 UI 유지
- 실제 콘텐츠만 교체해서 바로 개인 사이트로 전환 가능

## Features

- Astro 4 + TypeScript + MDX
- Astro Content Collections 기반 블로그/프로젝트 구조
- 홈, 프로젝트, 블로그, 소개, RSS 페이지 포함
- GitHub Actions 기반 GitHub Pages 배포 워크플로우 포함
- 샘플 블로그 글과 샘플 프로젝트 문서 포함
- MIT License 적용

## Quick Start

```bash
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:4321` 에서 실행됩니다.

프로덕션 빌드:

```bash
npm run build
npm run preview
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format
```

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   ├── og-default.png
│   └── robots.txt
├── src/
│   ├── components/
│   ├── config/
│   │   └── site.ts
│   ├── content/
│   │   ├── blog/
│   │   ├── projects/
│   │   └── config.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   └── styles/
├── LICENSE
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## What To Customize First

실제로 사이트를 쓰기 시작할 때는 아래 파일부터 바꾸는 것이 가장 효율적입니다.

### 1. Site Metadata

`src/config/site.ts`

여기에서 다음 값을 수정합니다.

- 사이트 이름
- 메인 타이틀 / 설명
- GitHub Pages URL
- 이메일 / GitHub / LinkedIn 링크
- 홈 화면 강점 카드
- 블로그 카테고리 / 시리즈 정의

### 2. Deployment URL

`astro.config.mjs`

`site` 값을 실제 배포 URL로 바꿔야 합니다.

예시:

```js
site: 'https://your-username.github.io'
```

커스텀 도메인을 쓴다면 그 도메인으로 바꾸면 됩니다.

### 3. About Page

`src/pages/about.astro`

현재는 템플릿 사용 가이드를 넣어두었습니다.  
본인 소개, 경력, 학력, 기술 스택, 작업 방식 등으로 교체하는 것을 권장합니다.

### 4. Blog Content

`src/content/blog/**/*.mdx`

샘플 글 3개가 들어 있습니다.

- Engineering Notes
- Reading Log
- Build Journal

원하면 이 구조를 유지해도 되고, 시리즈와 폴더를 직접 다시 설계해도 됩니다.

### 5. Project Content

`src/content/projects/*.mdx`

샘플 프로젝트 2개가 포함되어 있습니다.  
프로젝트별 소개, 역할, 사용 기술, 핵심 결정, 결과를 본인 내용으로 교체하면 됩니다.

## Content Model

### Blog Frontmatter

블로그 글은 `src/content/blog/` 아래의 `.mdx` 파일로 관리합니다.

```mdx
---
title: "Post Title"
date: 2026-03-15
summary: "Short summary shown in cards and feed."
tags: ["Astro", "MDX"]
category: "cs"
series: "Engineering Notes"
draft: false
---
```

기본 카테고리는 다음 3개입니다.

- `cs`
- `book`
- `til`

카테고리와 시리즈 정의는 `src/config/site.ts` 에서 변경할 수 있습니다.

### Project Frontmatter

프로젝트 문서는 `src/content/projects/` 아래의 `.mdx` 파일로 관리합니다.

```mdx
---
title: "Project Name"
period: "2026.03"
role: "Developer"
stack: ["Astro", "TypeScript", "GitHub Pages"]
links:
  github: "https://github.com/your-username/your-repo"
  demo: "https://your-username.github.io"
highlights:
  - "What makes this project notable"
metrics:
  - "A measurable or concrete result"
draft: false
order: 1
---
```

## Design Direction

이 템플릿은 일반적인 카드형 포트폴리오보다 조금 더 명확한 컨셉을 갖습니다.

- 내비게이션을 경로 이동처럼 표현
- 버튼을 명령 실행처럼 표현
- 카드와 섹션 헤더를 터미널 출력처럼 표현
- 모노스페이스 기반 시각 언어 유지

즉, "프로필 페이지"보다 "엔지니어의 작업 환경을 탐색하는 느낌"에 더 가깝습니다.

## Visual System

핵심 디자인은 `src/styles/global.css` 의 토큰을 중심으로 구성됩니다.

이 템플릿은 기본적으로 다음 시각 원칙을 따릅니다.

- 어두운 배경 위에 밝은 텍스트와 포인트 컬러를 사용하는 terminal contrast
- 모노스페이스 타이포그래피 기반 정보 계층
- 얇은 보더와 낮은 radius를 활용한 패널 구조
- 일반적인 마케팅 사이트보다 로그/콘솔에 가까운 컴포넌트 표현
- hover, active 상태를 색 변화와 border 강조 위주로 처리

대표적으로 다음 토큰들을 먼저 보면 전체 톤을 빠르게 이해할 수 있습니다.

```css
:root {
  --color-bg: #0d0d0d;
  --color-bg-alt: #111111;
  --color-bg-elevated: #161616;
  --color-text: #c8c8c8;
  --color-text-bright: #e8e8e8;
  --color-text-muted: #4a4a4a;
  --color-border: #1e1e1e;
  --color-accent: #00ff41;
  --color-accent-light: rgba(0, 255, 65, 0.06);
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
}
```

포인트는 단순히 "터미널처럼 보이는 것"이 아니라, 모든 인터랙션과 정보 배치를 같은 언어로 통일하는 것입니다.

예를 들면:

- 헤더는 일반 웹 네비게이션이 아니라 실행 중인 세션처럼 보이게 구성
- CTA는 배너 버튼이 아니라 command trigger처럼 표현
- 카드 제목과 메타데이터는 파일/경로/출력 로그처럼 배치
- 섹션 제목도 카피 문장 대신 shell command 문법으로 표현

## Theme And Tone

기본 팔레트는 phosphor green 계열 accent 를 사용하지만, 반드시 녹색을 유지할 필요는 없습니다.  
다만 아래 기준은 유지하는 편이 좋습니다.

- accent 색은 1개를 중심으로 통일
- background 레이어는 최소 2~3단계로 분리
- 텍스트 밝기 단계는 `bright / default / muted / dim` 식으로 유지
- 카드 hover 시에는 box-shadow보다 border와 tint 위주로 반응

색을 바꾸더라도 "개발자 작업 환경"이라는 메타포가 유지되도록, 과도한 장식성보다 구조적 일관성을 우선하는 편이 좋습니다.

## Key UI Patterns

템플릿에서 중요한 패턴은 아래와 같습니다.

### Header

- 로고 대신 `user@host` 형태의 브랜드 표현 사용
- 현재 경로를 명령행 이동처럼 보이게 처리
- GitHub 링크와 테마 토글도 보조 명령 버튼처럼 배치

### Hero

- 소개 문장을 바로 쓰기보다 terminal window 안에 출력되는 텍스트처럼 구성
- 이름, 역할, 설명을 순차적인 command/output 흐름으로 배치
- 액션 버튼은 `cd`, `open`, `mail` 같은 명령 메타포에 맞추기 좋음

### Cards

- 프로젝트 카드: 파일명, 기간, 역할, 하이라이트, 스택 순서로 구조화
- 블로그 카드: 날짜, 시리즈, 카테고리, 요약, 태그를 로그/레코드처럼 표현
- 강점 카드: “자기소개 문장”보다 “주장 + 근거” 구조가 잘 맞음

### Content Pages

- 상세 페이지는 마케팅 카피보다 문서/기록물에 가까운 톤이 어울림
- 프로젝트는 배경, 결정, 트레이드오프, 결과 중심
- 블로그는 짧은 요약과 명확한 태그 체계가 중요

## Customizing The Design

디자인을 수정할 때는 아래 순서로 접근하는 것을 권장합니다.

1. `src/styles/global.css` 에서 컬러, 폰트, 간격 토큰 수정
2. `src/components/Header.astro`, `Footer.astro` 에서 전역 UI 톤 수정
3. `src/pages/index.astro` 에서 hero와 섹션 표현 방식 조정
4. 카드 컴포넌트에서 정보 밀도와 표현 형식 조정

터미널 메타포를 유지하되, 본인 정체성에 맞게 얼마든지 변형해도 됩니다.  
예를 들어 아래처럼 재해석할 수 있습니다.

- 보안 엔지니어: audit console / incident log 톤
- AI 엔지니어: agent terminal / tool execution log 톤
- 인프라 엔지니어: deploy console / infra dashboard 톤
- 게임 개발자: debug console / runtime overlay 톤

## Deployment

배포는 `.github/workflows/deploy.yml` 로 처리됩니다.

기본 흐름:

1. `main` 브랜치에 push
2. GitHub Actions에서 `npm ci`
3. `npm run build`
4. `dist/` 산출물을 GitHub Pages에 배포

GitHub 저장소 설정에서는 `Pages` 의 source 를 `GitHub Actions` 로 두면 됩니다.

## Recommended Cleanup Before Public Release

공개 배포 전에 아래 항목은 꼭 확인하는 편이 좋습니다.

- `src/config/site.ts` 의 placeholder 링크 제거
- `astro.config.mjs` 의 URL 수정
- 샘플 프로젝트/샘플 글 삭제 또는 교체
- `public/og-default.png` 를 실제 OG 이미지로 교체
- `public/favicon.svg` 를 개인 브랜딩에 맞게 교체
- 소개 페이지의 템플릿 안내 문구 제거

## License

이 저장소 전체는 [MIT License](./LICENSE)를 따릅니다.

## Why This Repo Exists

원본 운영 레포는 실제 블로그 글, 프로젝트 상세, 개인 정보가 함께 포함된 저장소라서 저장소 전체에 단일 오픈소스 라이선스를 바로 적용하기 애매했습니다.  
이 템플릿 레포는 그 문제를 피하기 위해, 구현 뼈대와 재사용 가능한 UI/구조만 분리한 버전입니다.
