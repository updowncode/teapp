const APIHOST = 'http://10.249.239.216:8050'; //then Attach to IIS process
const HEADERS: any = {
  'Content-Type': 'application/json'
};
export const APIs = {
  APIHOST,
  HEADERS,
  LOGIN: `${APIHOST}/api/mlogin`,
   GETLIST: `${APIHOST}/api/heroes`,
};


