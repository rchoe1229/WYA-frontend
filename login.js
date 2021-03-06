const loginForm = document.querySelector(".login-form")
const message = document.querySelector(".message")

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  console.log(formData)
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify ({
      name: formData.get("name"),
      password: formData.get("password"),
    })
  }).then(response => {
    if (!response.ok) throw new Error("Not an OG User or Password 💩")
    return response.json()
  }).then(response => {
    location.replace("http://localhost:3001/show-page.html")
  }).catch(error => {
    message.textContent = error.message
  })
}) 