const message = document.getElementById("message")

// Write an event listener that listens for the keyup event on the input field.

const output1 = document.querySelector("#article--1")
const output2 = document.querySelector("#article--2")

// 

message.addEventListener("keyup", event => {
    output1.textContent = event.target.value
    output2.textContent = event.target.value
})

