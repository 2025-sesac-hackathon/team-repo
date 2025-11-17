FROM node:20-alpine

WORKDIR /app

# 의존성 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 전체 복사
COPY . .

# TypeScript 빌드 실행
RUN npm run build

# 외부 접근용 포트 오픈
EXPOSE 3000

# 빌드된 JS 파일로 프로덕션 서버 실행
CMD ["node", "dist/main.js"]