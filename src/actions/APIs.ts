const APIHOST = 'http://10.249.239.216:8050'; 
// const APIHOST = 'https://b2b.toureast.com'; 
const HEADERS: any = {
  'Content-Type': 'application/json'
};
export default {
  APIHOST,
  HEADERS,
  LOGIN: `${APIHOST}/api/mlogin`,
   GETLIST: `${APIHOST}/api/heroes`,
};


