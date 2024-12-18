"use strict";
// Select the start button
let startBtn = document.querySelector(".start-button");
let container = document.querySelector(".container");
//Notify the user if they're offline
if (!navigator.onLine) {
  startBtn.addEventListener("mouseover", () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        const notification = new Notification("You're Offline!", {
          body: "You're viewing an offline copy of this page",
          data: { name: "Magpiny BO" },
          icon: "./images/magIcon192.png",
        });
        notification.addEventListener("error", (error) => {
          alert(`Error: ${error}`);
        });
      }
    });
  });
} else {
  //Otherwise, Register Service worker to
  // Enable offline mode
  if (navigator.serviceWorker) {
    // Make sure serviceWorker is supported
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./qserviceWorker.js")
        .then((reg) => console.log("Servie worker: Registered "))
        .catch((err) => console.log("Service Worker: Error-> ", err));
    });
  }
}

// Grab all the necessary elements

let question = document.querySelector(".question");
let choices = document.querySelector(".choices");
let exitBtn = document.querySelector(".btns .exit");
let proceedBtn = document.querySelector(".btns .proceed");
let nextBtn = document.querySelector(".next-quiz");

let rulesContainer = document.querySelector(".quiz-rules");
let quizesContainer = document.querySelector(".quizes");
let resultsContainer = document.querySelector(".results");

let timeLeft = document.querySelector(".time-left");
let totalTime = document.querySelector(".total-time");
let timeLine = document.querySelector(".timeline");
let quizCount = document.querySelector(".quiz-count");
let scores = document.querySelector(".scores");

let footer = document.querySelector("footer>b");
let year = new Date().getFullYear();
footer.textContent = year.toString();

//Display App time in header::
setInterval(
  () =>
    (document.querySelector("em").textContent = new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h12",
      dayPeriod: "long",
    }).format(new Date())),
  1000
);

//consuming my json db endpoint ://test
async function getDataFromJsonFile() {
  let response = await fetch("./db.json");
  let data = await response.json();
  let persons = data.person;
  // let cars = data.cars;

  // return console.log(cars.map((car) => `${car.make} costs ${car.price}`));

  return persons.map(
    (person) => `${person.name} is  ${person.age}yrs old and is a ${person.job}`
  ); // This was a test function
}

console.log(getDataFromJsonFile().catch((err) => console.log(`Error: ${err}`)));
// getData(); // ->End of Test

/*
Let's get our hands dirty!!
*/

//Show Game Rules

//Launch QuizApp
startBtn.onclick = () => {
  rulesContainer.classList.add("rules_active");
  startBtn.style.opacity = "0";

  console.log("Hi");
};

//Exit App
exitBtn.addEventListener("click", () => {
  rulesContainer.classList.remove("rules_active");
  startBtn.style.opacity = "1";
  console.log("Hi");
});

const quit = resultsContainer.querySelector(".btns .quit");
const restart = resultsContainer.querySelector(".btns .restart");

let chkIconTag = `<span style="color: rgb(84, 247, 3); font-size: x-large;">&checkmark;</span>`;
let crossIcontag = `<span style="color: rgb(255, 0, 0); font-size: x-large;">&cross;</span>`;
let chkIconTag1 = (document.createElement("span").innerHTML = chkIconTag);
let crossIcontag1 = (document.createElement("span").innerHTML = crossIcontag);
class UpdateUI {
  constructor() {
    this.timeValue = 15;
    this.questionNumber = 0;
    this.userScore = 0;
    this.widthValue = 0;
    this.counter;
    this.counterLine;
  }

  //Get data from our database (json file)
  async quizdata() {
    //Fetch data from database (json file)
    let response = await fetch("./quizdb.json");
    let data = await response.json();
    return data.testdata;
  }

  //Populate the questions div
  async displayQuestions() {
    let response = await fetch("./quizdb.json");
    let data = await response.json();
    // let quizNo = this.questionNumber;
    // console.log();
    // let mdata = Object.values(data.testdata);
    // console.log(mdata.map((data) => data.id));

    let filtdata = data.testdata.filter(
      (quiz) => quiz.id == this.questionNumber + 1
    );

    filtdata.map((Quiz) => {
      let section = document.querySelector("section");
      section.setAttribute("key", `${Quiz.id}`);

      question.textContent = `${Quiz.id}: ${Quiz.question}`;

      choices.innerHTML = `${Quiz?.choices?.map(
        (choice) => `<p class="choice">${choice}</p>`
      )}`;
    });

    let option = document.querySelectorAll(".choice");

    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "updateUI.optionSelected(this)");
    }

    console.log(option.length);
  }

  async showCounter() {
    let data = await this.quizdata();
    let quizPagination = `<span> ${this.questionNumber + 1} of ${
      data.length
    }</span>`;
    quizCount.innerHTML = quizPagination;
  }
  //
  async startTimer() {
    let counter = setInterval(timer, 1000);
    let time = this.timeValue;
    let quiz_count = this.questionNumber;
    let data = await this.quizdata();

    let timecounter = this.counter;
    function timer() {
      timeLeft.textContent = `Time Left: ${time} / 15`;
      time--;
      if (time < 10) {
        timeLeft.textContent = `Time Left: 0${time} / 15`;
      }

      if (time <= 0) {
        clearInterval(counter); //clear counter
        totalTime.textContent = "";
        timeLeft.textContent = "Time Over!";
        const allOptions = choices.children.length;
        let correctAnswer = data[quiz_count].answer;

        for (let i = 0; i < allOptions; i++) {
          if (choices.children[i].textContent == correctAnswer) {
            choices.children[i].setAttribute("class", "option correct");
            choices.children[i].insertAdjacentHTML("beforeend", chkIconTag);
          }
        }
        for (let i = 0; i < choices.children.length; i++) {
          choices.children[i].classList.add("disabled");
        }
        nextBtn.classList.add("show");
      }
    }
  }

  //
  startTimeline() {
    let counterLine = setInterval(timer, 39);
    let counterLine1 = setInterval(timer, 90);
    let timelineWidth = 0;

    //Get page width;
    let pageWidth = (function pgWidth() {
      return window.innerWidth != null
        ? window.innerWidth
        : document.documentElement && document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : document.body != null
        ? document.body.clientWidth
        : null;
    })();

    function timer() {
      parseInt(timelineWidth) === parseInt(pageWidth * 0.5)
        ? clearInterval(counterLine1)
        : timelineWidth++;
      timeLine.style.width = `${timelineWidth}px`;

      console.log(timelineWidth);
      console.log(parseInt(pageWidth * 0.6));
    }
  }
}

let updateUI = new UpdateUI();

//The class has become overwhemingly big and a little bit unreadale so
//I'm extending it here

//Option selected
UpdateUI.prototype.optionSelected = async (answer) => {
  clearInterval(updateUI.counter);
  clearInterval(updateUI.counterLine);
  let data = await updateUI.quizdata();
  let userAnswer = answer.textContent;
  let correctAnswer = data[updateUI.questionNumber].answer;
  const allOptions = choices.children.length;

  if (userAnswer == correctAnswer) {
    updateUI.userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", chkIconTag);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIcontag1);

    for (let i = 0; i < allOptions; i++) {
      if (choices.children[i].textContent == correctAnswer) {
        choices.children[i].setAttribute("class", "choice correct");
        choices.children[i].insertAdjacentElement("beforeend", chkIconTag1);
      }

      console.log(correctAnswer);
    }
  }

  for (let i = 0; i < allOptions; i++) {
    choices.children[i].classList.add("disabled"); //Disable all choices once the choice is picked
  }
  nextBtn.classList.add("show"); //display next button once a choice is made/picked/selected
};

//Display User Results
UpdateUI.prototype.showResults = async () => {
  rulesContainer.classList.remove("rules_active");
  quizesContainer.classList.remove("quizes_active");
  resultsContainer.classList.add("res_active");

  let data = await updateUI.quizdata();

  //format numbers to percentage
  let fmtperc = new Intl.NumberFormat("en-GB", {
    style: "percent",
  });

  if (updateUI?.userScore > 4) {
    let scoreTag = `Congrats! Your score is: ${fmtperc.format(
      updateUI.userScore / data.length
    )}`;
    scores.innerText = scoreTag;
  } else if (updateUI?.userScore > 2) {
    let scoreTag = `Well done! Your score is:  ${fmtperc.format(
      updateUI.userScore / data.length
    )}`;
    scores.innerText = scoreTag;
  } else {
    let scoreTag = `We live to fight another day! You scored:  ${fmtperc.format(
      updateUI.userScore / data.length
    )}. Try harder & work smarter next time`;
    scores.innerText = scoreTag;
  }

  console.log(scores.innerText);
};

//Continue or Proceed
proceedBtn.onclick = () => {
  rulesContainer.classList.remove("rules_active");
  quizesContainer.classList.add("quizes_active");
  updateUI.displayQuestions();
  updateUI.showCounter();
  updateUI.startTimer();
  updateUI.startTimeline();
};

//Next Question button
nextBtn.onclick = async () => {
  let data = await updateUI.quizdata();

  if (data[updateUI.questionNumber].id < data.length) {
    data[updateUI.questionNumber].id++;
    updateUI.questionNumber++;

    updateUI.displayQuestions();
    updateUI.showCounter();
    updateUI.startTimer();
    updateUI.startTimeline();
    // clearInterval(setInterval(timer, 1000));
    // clearInterval(setInterval(timer, 39));
    //timeLeft.textContent = "Time Left: 15";
    nextBtn.classList.remove("show");
    updateUI.startTimer();
  } else {
    clearInterval(updateUI.counter);
    clearInterval(updateUI.counterLine);
    updateUI.showResults();
  }
};

//Restart quiz
restart.onclick = () => {
  resultsContainer.classList.remove("res_active");
  quizesContainer.classList.add("quizes_active");
  updateUI.questionNumber = 0;
  updateUI.displayQuestions();
  updateUI.showCounter();
  updateUI.startTimer();
  updateUI.startTimeline();
  nextBtn.classList.remove("show");
};

//QuitApp
quit.addEventListener("click", () => window.location.reload());
