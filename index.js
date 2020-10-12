// Add your code here

function appendToDoc (info) {
    let p = document.createElement("p")
    p.innerHTML = `${info}`
    document.body.appendChild(p)
};

function submitData(name, email) {
    let formData = {
        name: `${name}`,
        email: `${email}`
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            appendToDoc(object.id);
        })
        .catch(function(error) {
            appendToDoc(error.message);
        });
};0