# Node.js 20을 베이스 이미지로 사용
FROM node:20-alpine AS base
ENV NODE_ENV=production
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

FROM base AS build

# 의존성 설치 (production only)
RUN apk add --no-cache libc6-compat
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm
RUN pnpm install husky -g

WORKDIR /app

# 빌드된 파일들과 필요한 모든 파일 복사
COPY package.json pnpm-lock.yaml /app
COPY ./public/ /app/public/
COPY ./.next/ /app/.next/

# 의존성 설치 (production only)
RUN pnpm install --frozen-lockfile --prod

# 어플리케이션 포트 설정
ENV HOST=0.0.0.0
EXPOSE 3000

# 어플리케이션 실행
ENTRYPOINT ["pnpm", "start"]
