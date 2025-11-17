// main.ts
// 서버 실행 코드
import app from "./app";

const start = async () => {
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' });
        console.log("서버가 http://localhost:3000 에서 실행 중입니다.");
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
