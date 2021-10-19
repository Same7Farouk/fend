const http = require('http');
const assert  = require("assert");

let BASE_URL = "http://localhost:3000";


  /**
   * Test 1 : Hit BASE_URL and assert response statusCode to be  === 200
   * 
   * @path {BASE_URL}
   * @return expect : {200}
   */
http.get(BASE_URL, (response) => {
      console.log("Response: " + response.statusCode);
      assert(response.statusCode === 200);
    });

