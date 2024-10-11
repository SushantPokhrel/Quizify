import {
  sports,
  compScience,
  moviesMusic,
  geography,
  history,
} from "./data.js";

let count = 0;
let score = 0;
let tracker = null;
let category = sports;
const question = document.querySelector(".question");
const answers = document.querySelectorAll(".li-ans");
const select = document.querySelector("#select-el");
const tractQuestion = document.querySelector(".track-question");
select.addEventListener("change", () => {
  count = 0;
  if (select.value === "moviesMusic") {
    category = moviesMusic;
  } else if (select.value === "compScience") {
    category = compScience;
  } else if (select.value === "history") {
    category = history;
  } else if (select.value === "geography") {
    category = geography;
  } else {
    category = sports;
  }
  console.log(category);
  renderQuestion(count);
});
// Initial render
renderQuestion(count);

answers.forEach((item, index) => {
  item.addEventListener("click", () => {
    const isCorrect = category[count].answers[index].correct;
    if (isCorrect) {
      score++;
      tracker = true;
    } else {
      tracker = false;
    }
    count++;
    tracker
      ? (item.style.backgroundColor = "green")
      : (item.style.backgroundColor = "red");
    tractQuestion.innerHTML = `${count}/10`;
    if (count < category.length) {
      renderQuestion(count);
    } else {
      console.log("Final score:", score);
      const container = document.querySelector(".div-flex");
      container.innerHTML = `<h2>Your score: ${score}</h2>
      <a class="btn-restart" onClick="location.reload()" href="">Play again</a>
      `;
    }
  });
});

function renderQuestion(count) {
  setTimeout(() => {
    question.textContent = category[count].title;
    answers.forEach((item, index) => {
      item.style.backgroundColor = "#6200ea";
      item.textContent = category[count].answers[index].text;
    });
  }, 1000);
}
