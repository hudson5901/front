/*
    deno run --allow-read=$PWD --allow-net=0.0.0.0 server.ts
*/


import { Application, send } from "https://deno.land/x/oak@v6.1.0/mod.ts";

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/src`,
    index: "index.html",
  });
});

console.log('Started')

await app.listen({ port: 8000 });