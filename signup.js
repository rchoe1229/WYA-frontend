const loginForm = document.querySelector(".login-form")
const message = document.querySelector(".message")

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)

  fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify ({
      user: {
        name: formData.get("name"),
        age: formData.get("age"),
        email: formData.get("email"),
        password: formData.get("password"),
      }
    })
  }).then(response => {
    console.log(response)
    if (!response.ok) throw new Error("Cannot Register User")
    return response.json()
  }).then(response => {
    location.replace("http://localhost:3001")
  }).catch(error => {
    message.textContent = error.message
  })
}) 