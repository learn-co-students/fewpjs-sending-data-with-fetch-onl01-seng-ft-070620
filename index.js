function submitData(name, email) {
    // let formData = 

    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch("http://localhost:3000/users", obj)
        .then(function(response){
            return response.json();
        })
        .then(function(object) {
            let id = document.body.appendChild(document.createElement("p"))
            id.innerHTML = object.id
        })
        .catch(function(error) {
            // let errorMessage = document.body.appendChild(document.createElement("p"))
            // errorMessage.innerText = error.message

            let errorMessageTwo = document.body.appendChild(document.createElement("p"))
            errorMessageTwo.innerHTML = "Unauthorized Access"
        })
}

// submitData("CT", "email")