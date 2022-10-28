import { ENV } from "./configs/env";
import server from "./server";

const port = ENV.port;

server.listen(port, () => {
  console.log(`Server running port:${port}`);
});
