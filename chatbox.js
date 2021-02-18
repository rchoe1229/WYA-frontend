const socket = io("ws://localhost:4000")
const $ul = document.querySelector("#messages")

const form = document.querySelector("form")
  form.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    socket.emit("chat message", formData.get("message"))
    event.target.reset()
  })
  socket.on("chat message", message => {
    console.log("message", message)
    const $li = document.createElement("li")
    $li.textContent = message
    $ul.append($li)
  })