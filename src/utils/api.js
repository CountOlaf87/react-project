import axios from "axios";

const axiosClient = axios.create();

const token = process.env.REACT_APP_HASS_BEARER

axiosClient.defaults.baseURL = process.env.REACT_APP_HASS_URL;

axiosClient.defaults.headers = {
  'Authorization': `${token}`,
  'content-type': 'application/json'
};

// axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = false;

export function getRequest(URL) {
  return axiosClient.get(`${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}

export function handleError(err){
  if(err.response){
    console.log("Problem with response: ", err.response.status);
  }
  else if (err.request){
    console.log("Problem with request: ");
  }
  else{
    console.log("Error ", err.message);
  }
}
// const baseURL = "/api/"
// const headers = {
//   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjN2IxYjU5NWU4ZDc0NzU0YmVmM2ZlZjJlODAzN2U3OSIsImlhdCI6MTYzMTg4MDQwNiwiZXhwIjoxOTQ3MjQwNDA2fQ.hV0uT5W9LAr7lqUTpKkHxkW1QzhVqQyCFQrt2_wATys',
//   'content-type': 'application/json'
// }

// const client = axios.create({
//   baseURL,
//   headers,
//   responseType: "json"
// });

// export default function getEntities(entity_id) {
//   client.get(`/states/${entity_id}`)
//     .then((response) => {
//       return response.data
//     });
// };