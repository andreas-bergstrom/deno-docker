FROM denoland/deno:distroless
WORKDIR /app
COPY . .
CMD ["run", "--allow-all", "--allow-env", "index.ts"]
