Deno.serve({
  port: 3000,
  handler: async (req) => {
    const pathname = new URL(req.url).pathname; // extrae solo "/"
    let path = `./src${pathname}`;
    if (pathname === "/") path = "./src/index.html";

    console.log("Request URL:", req.url);
    console.log("Resolved path:", path);

    try {
      const file = await Deno.readTextFile(path);
      const contentType = path.endsWith(".ts")
        ? "application/javascript"
        : path.endsWith(".html")
        ? "text/html"
        : "text/plain";

      return new Response(file, {
        status: 200,
        headers: { "Content-Type": contentType },
      });
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  },
});
