const bars = document.querySelector(".bars");
const TravelContent = document.querySelector(".Travel-content");

bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  TravelContent.classList.toggle("active");
});
