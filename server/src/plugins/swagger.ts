// server/src/plugins/swagger.ts
import { FastifyPluginAsync } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const swaggerPlugin: FastifyPluginAsync = async (fastify) => {
    // OpenAPI 스펙 등록
    await fastify.register(fastifySwagger, {
        openapi: {
            info: {
                title: '2025 새싹해커톤 API',
                description: 'Fastify 기반 API 문서',
                version: '1.0.0',
            },
            tags: [
                { name: 'auth', description: 'Authentication API' },
                { name: 'interest', description: 'Interest API' },
                { name: 'goal', description: 'Goal API' },
                { name: 'resume', description: 'Resume API' },
                { name: 'roadmap', description: 'Roadmap API' },
            ],
            servers: [{ url: 'http://localhost:3000는 훼이크' }],
        },
    });

    // Swagger UI 등록 
    await fastify.register(fastifySwaggerUi, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false,
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
    });
};

export default swaggerPlugin;
