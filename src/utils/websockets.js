import {
  createConnection,
  createLongLivedTokenAuth,
} from "home-assistant-js-websocket";

const connection = (async () => {
  const auth = createLongLivedTokenAuth(
    "http://10.10.2.5:8123",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjN2IxYjU5NWU4ZDc0NzU0YmVmM2ZlZjJlODAzN2U3OSIsImlhdCI6MTYzMTg4MDQwNiwiZXhwIjoxOTQ3MjQwNDA2fQ.hV0uT5W9LAr7lqUTpKkHxkW1QzhVqQyCFQrt2_wATys"
  );
  return await createConnection({ auth });

})();

export default connection;