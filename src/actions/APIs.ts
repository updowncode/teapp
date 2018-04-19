const APIHOST = 'http://10.249.239.216:8050'; 
// const APIHOST = 'https://b2b.toureast.com'; 
const HEADERS: any = {
  'Content-Type': 'application/json'
};

const datas = '[{"id":0,"name":"P0"},{"id":1,"name":"P1"},{"id":2,"name":"P2"},{"id":3,"name":"P3"},{"id":4,"name":"P4"},{"id":5,"name":"P5"},{"id":6,"name":"P6"},{"id":7,"name":"P7"},{"id":8,"name":"P8"},{"id":9,"name":"P9"}]';
export default {
  APIHOST,
  datas,
  HEADERS,
  LOGIN: `${APIHOST}/api/mlogin`,
   GETLIST: `${APIHOST}/api/heroes`,
};


