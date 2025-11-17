# 2025 새싹해커톤 백엔드 프로젝트 🚀

## 개요  
이 프로젝트는 Fastify, TypeScript, PostgreSQL 기반의 모듈러 모놀리식 아키텍처로 구현된 백엔드 서버입니다.
주요 기능은 로그인/회원가입, 관심분야 선택, 취업 목표기간 설정, 이력서 업로드, 로드맵 제공 등입니다.
Swagger 플러그인으로 API 문서가 자동화되어 있습니다. 📄


---

## 프로젝트 구조 📂

```
/src
├── app.ts                    # Fastify 앱 초기화 및 플러그인 등록
├── server.ts                 # 서버 실행 진입점
├── plugins                   # swagger, 인증 등 플러그인 모음
├── modules                   # 기능별 모듈 (auth, interest, goal, resume, roadmap)
├── db                        # 데이터베이스 초기화 및 마이그레이션 관리
├── utils                     # 공통 유틸리티 함수
└── types                     # 전역 타입 정의

```

---

## 기능별 모듈 설명 🔧

- **auth**  
  로그인 및 회원가입 기능을 담당합니다.  
  JWT 토큰 기반 인증 구현과 관련 API, 인증 플러그인 관리가 포함됩니다.

- **interest**  
  사용자 관심분야 선택 기능을 제공합니다.  
  사용자가 키워드로 관심사를 지정할 수 있도록 API와 비즈니스 로직을 구현합니다.

- **goal**  
  취업 준비 목표기간 선택 기능 모듈입니다.  
  사용자의 목표 기간 정보를 관리하고 이를 기반으로 동작하는 기능을 담당합니다.

- **resume**  
  이력서 업로드 및 관리 기능을 담당합니다.  
  PDF 및 텍스트 업로드, 저장, 조회 API를 포함합니다.

- **roadmap**  
  메인화면 및 로드맵 페이지 관련 기능을 담당합니다.  
  로드맵 데이터 제공과 API 관리를 포함합니다.

---

## 사용 기술/패키지 ⚙️

- Fastify: 고성능 Node.js 서버 프레임워크  
- TypeScript: 타입 안정성 있는 개발  
- PostgreSQL: 관계형 데이터베이스  
- ORM: Prisma(권장)  
- Swagger: API 문서 자동화  

---

## 시작 방법 🏁

1. 프로젝트 클론  
```
git clone https://github.com/2025-sesac-hackathon/team-repo.git
cd team-repo/server
```


2. 의존성 설치 및 빌드  
```
npm install
npm run build
```


3. 환경 변수 작성 (.env 파일)  

4. 개발 서버 실행  
```
npm run dev
```

5. API 문서 열기  
http://localhost:3000/docs 에서 Swagger UI 확인 가능

---

도커로 띄우기 🐳﻿
1. 도커 이미지 빌드
```
docker build -t aicaeering .
```

2. 도커 컨테이너 실행
```
docker run -p 3000:3000 sesac-hackathon-backend
```

3. 도커 내부 Fastify 서버는 외부 접근을 위해 반드시 다음과 같이 바인딩해야 합니다.
```
await app.listen({ port: 3000, host: '0.0.0.0' });
```

4. 반드시 Dockerfile은 다음과 같이 구성합니다.
```
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]
```

5. 위 방법대로 빌드 후 컨테이너를 실행하면
http://localhost:3000 또는 http://<도커_호스트_IP>:3000 에서 API 서버와 Swagger UI(/docs)를 확인할 수 있습니다.

---
## 개발 가이드 🛠️

- 각 기능별 코드는 `src/modules/{기능명}`에 위치합니다  
- 컨트롤러, 서비스, 라우터, 스키마, DTO로 역할 분리 관리  
- 플러그인 설정은 `src/plugins` 폴더에서 진행  
- DB 초기화 및 마이그레이션 관리는 `src/db`에서  

---

## git 관리 및 배포 팁 ✅

- `node_modules/`, `dist/`, `.env` 등은 `.gitignore`에 등록되어 있습니다  
- 커밋 전 `npm run build`로 빌드 산출물 확인  
- 배포 시에는 빌드 산출물과 환경변수 관리 주의

---

## 추가 자료 📚

- [Fastify 공식 문서](https://www.fastify.io/docs/latest/)  
- [Prisma 공식 문서](https://www.prisma.io/docs/)  