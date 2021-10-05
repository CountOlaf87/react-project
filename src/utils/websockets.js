// import { io } from "socket.io-client";

// console.log(io);

// var connectionOptions = {
//   "force new connection": true,
//   "reconnectionAttempts": "Infinity",
//   "timeout": 10000,
//   "transports": ["websocket"],
//   "type": "auth",
//   "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjN2IxYjU5NWU4ZDc0NzU0YmVmM2ZlZjJlODAzN2U3OSIsImlhdCI6MTYzMTg4MDQwNiwiZXhwIjoxOTQ3MjQwNDA2fQ.hV0uT5W9LAr7lqUTpKkHxkW1QzhVqQyCFQrt2_wATys",
//   cors: {
//     origin: "ws://localhost:3000",
//   }
// };

// const socket = io.connect('ws://10.10.2.5:8123', connectionOptions);

// export default socket;
import {
  Auth,
  createConnection,
  subscribeEntities,
  createLongLivedTokenAuth,
} from "home-assistant-js-websocket";

const connection = (async () => {
  const auth = createLongLivedTokenAuth(
    "http://10.10.2.5:8123",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjN2IxYjU5NWU4ZDc0NzU0YmVmM2ZlZjJlODAzN2U3OSIsImlhdCI6MTYzMTg4MDQwNiwiZXhwIjoxOTQ3MjQwNDA2fQ.hV0uT5W9LAr7lqUTpKkHxkW1QzhVqQyCFQrt2_wATys"
  );
  return await createConnection({ auth });

  // subscribeEntities(connection, (entities) => console.log(entities));
})();

// connection.then(console.log);
export default connection;