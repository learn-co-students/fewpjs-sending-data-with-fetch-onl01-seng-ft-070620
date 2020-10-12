// Resources
//   http://localhost:3000/dogs
//   http://localhost:3000/cats
//   http://localhost:3000/users
//   http://localhost:3000/robots

// takes a user's name and their email
// uses fetch() to make a POST request to http://localhost:3000/users
// adds the id in the response to the page's body
// catches potential errors and adds them to the page's body also
function submitData(name, email) {
  let formData = { name, email }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", configObj)
  .then(response => response.json())
  .then(json => document.body.innerHTML += json["id"])
  .catch(error => document.body.innerHTML += error["message"])
}
