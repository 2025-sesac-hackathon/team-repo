// app.ts
// Fastify 인스턴스 생성 및 플러그인 등록
import Fastify from "fastify";
import swaggerPlugin from "./plugins/swagger";

const app = Fastify({ logger: true });

app.register(swaggerPlugin);

app.get('/', async () => ({ message: 'hello world' }));

// 이후 각 모듈 라우트도 등록 예정

export default app;
