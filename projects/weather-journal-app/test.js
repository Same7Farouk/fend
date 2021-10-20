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
      console.log("Response for GET root: " + response.statusCode);
      assert(response.statusCode === 200);
    });

/**
   * Test 2 : Hit `/data` endpoint and assert response statusCode to be  === 200
   * 
   * @path {BASE_URL}/data
   * @return status : {200}
   */
  http.get(BASE_URL+'/data', (response) => {
      console.log("Response for GET /data: " + response.statusCode);
      assert(response.statusCode === 200);
    });


  /**
   * Test 3 : Hit random endpoint `/thisIsNotAValidEndpoint` and assert response statusCode to be  === 404
   * 
   * @path {BASE_URL}/thisIsNotAValidEndpoint
   * @return status : {404}
   */
  http.get(BASE_URL+'/thisIsNotAValidEndpoint', (response) => {
      console.log("Response for GET /thisIsNotAValidEndpoin: " + response.statusCode);
      assert(response.statusCode === 404);
    });

    /**
   * Test 4 : Hit post endpoint `/` and assert response statusCode to be  === 200
   * 
   * @path {BASE_URL}
   * @return status : {200}
   */

    const request = require('request');
    var postData = {}
    const post_body = {
        temperature: 20,
        date: '2021-10-19',
        user_response: 'Cool'
    };

    postConfig = {
        url: BASE_URL,
        form: post_body
    };

    request.post(postConfig, function (err, response, body) {
        console.log("Response for POST  root: " + response.statusCode);
        assert(response.statusCode === 200);
    });

