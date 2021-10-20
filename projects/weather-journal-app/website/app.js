/* Global Variables */
const apiKey = "52ba739705f7335ceb995c4989ccf1bc";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

async function getData(base_url = '', zip = '', personal_API_key = '') {
    const url = base_url + zip + ',us&appid=' + personal_API_key
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Origin': true
     }
    }).catch(error => console.log('Caught!', error));
    return response.json(); // parses JSON response into native JavaScript objects
}

  const postData = async ( path = '', data = {})=>{
      const response = await fetch(path, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
}

  async function retrieveData() {
      const url = '/data';
      const response = await fetch(url, {
      method: 'GET'
    });
    return response.json();
}

  document.getElementById("generate").addEventListener("click", function() {
      const base_url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
      const zip = document.getElementById("zip").value;
      getData(base_url, zip, apiKey)
      .then(data => {
          console.log("data", data);
          const code = data.code;
          if (code === 200) {
            hideError();
            const user_response = document.getElementById("feelings").value;
            const data_oblect = { 
                temperature: data.main.temp,
                date: newDate,
                user_response: user_response 
              };
              postData('/', data_oblect);
          } else {
              showError(data.message);
          }
        })
        .then(() => { 
            const data = retrieveData()
            .then(function(data) {
                const temp = data.temperature;
                const date = data.date;
                const content = data.user_response;
                document.getElementById("date").innerHTML = 'Date: ' + date;
                document.getElementById("temp").innerHTML = 'Temperature: ' + temp;
                document.getElementById("content").innerHTML = 'Feeling: ' + content;
            });
        });
    });

    function showError(message = '') {
        document.getElementById("zipError").innerText = message;
    }
    function hideError() {
        document.getElementById("zipError").innerText = '';
    }
