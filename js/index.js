///Task 1
const input = document.querySelector('#username')
let filteredText = ""
input.addEventListener('input', (event) => {
  if (!isNaN(Number(event.data))) {
    input.value = filteredText
    return;
  }
  filteredText += event.data
  input.value = filteredText
})

////Task 2
const modal = document.querySelector(".modal");
const openButton = document.querySelector(".openModal");
const closeButton = document.querySelector(".closeButton");

openButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

////Task 3


