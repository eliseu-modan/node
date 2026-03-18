const axios = require('../../02-bases/node_modules/axios/index.d.cts');


const httpClientPlugin = {

  get: async(url) => {
    const { data } = await axios.get( url );
    return data;
    // const resp = await fetch( url );
    // return await resp.json();     
  },

  post: async(url, body) => {},
  put: async(url, body) => {},
  delete: async(url) => {},

};




module.exports = {
  http: httpClientPlugin,
};