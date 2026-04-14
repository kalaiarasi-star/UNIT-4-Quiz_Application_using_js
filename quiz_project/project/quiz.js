let timeLeft = 50;
let timerId;
window.onload = function() {
  timerId = setInterval(updateTimer, 1000);
};
function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = "Time left: " + timeLeft + "s";
  if (timeLeft <= 0) {
    clearInterval(timerId);
    submitQuiz(); 
    document.getElementById("timer").innerText = "Time's up!";
  }
  timeLeft--;
}
function submitQuiz() {
  clearInterval(timerId); 
  let score = 0;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q1 && q1.value === "Paris") {
    score++;
  }
  if (q2 && q2.value === "Mars"){
    score++;
  }
  if (q3 && q3.value === "Shakespeare") {
    score++;
  }
  document.getElementById("score").innerText = "Your score: " + score + "/3";
}