const http = require("http");
const server = http.createServer();

// a simple http server
server.on("request", (request, response) => {
  if (request.method === "POST" && request.url == "/echo") {
    let body = [];
    request
      // requests are streams
      .on("data", (chunk) => {
        console.log(`type of chunk: ${typeof chunk}`);
        console.log(chunk);
        body.push(chunk);
      })
      .on("end", () => {
        // here it finished receiving data
        response.writeHead(200, { "Content-Type": "text-plain" });
        console.log(`# of chucks in body: ${body.length}`);
        // we have to concat in case there is more than 1 chunk (not this case)
        body = Buffer.concat(body).toString();
        response.end(body);
      });
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(9001);
console.log("Servidor en la url http://localhost:9001");
