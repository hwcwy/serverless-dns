const html = await Deno.readTextFile("./www/index.html");

Deno.serve({ port: 8000 }, (_) => {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
