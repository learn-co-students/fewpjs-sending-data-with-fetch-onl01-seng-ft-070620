function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(resp) { return resp.json() })
    .then(function(object) {
        document.body.innerHTML += object.id
      })
      .catch(object => document.body.innerHTML += object.message)
}
