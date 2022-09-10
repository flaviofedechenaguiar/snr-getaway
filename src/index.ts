import server from "./server";

server.listen(process.env.PORT, () => {
  console.log(`Server running http://localhost:${process.env.PORT}/`);
});
