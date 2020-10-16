let submitData = {
  name: "Ray",
  email: "awesome@email.com"
}

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(submitData)
}

function submitData(usrName, userEmail) {
    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        document.body.innerHTML = object["id"]
      })
      .catch(function(error) {
        document.body.innerHTML = error.message
      })
}
