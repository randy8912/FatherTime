let timer;
let remainingTime;


function displayTime() {
  // bereken hoeveel minuten en seconden
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  // laat de tijd in de timer zien
  document.getElementById('timer').textContent = voegNulToe(minutes) + ':' + voegNulToe(seconds);
}

function voegNulToe(num) {
  // voegt een nul toe wanner getal kleiner is dan 10
  return (num < 10 ? '0' : '') + num;
}

function startTimer() {
  // bepaal het aantal minuten uit input (parseInt maakt van string een nummer)
  let minutes = parseInt(document.getElementById('minutes').value);
  // bereken het aantal secondes
  remainingTime = minutes * 60;
  // laat de huidige tijd zien
  displayTime();
  // update de tijd met de updateTime() functie
  timer = setInterval(updateTime, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  // stop de timer
  clearInterval(timer);
  // reset de tijd naar 0
  document.getElementById('timer').textContent = '00:00';
  document.getElementById('minutes').value = '5';
}

function updateTime() {
  if (remainingTime > 0) {
    // decrease remaining time by one second 
    remainingTime--;
    // update display time
    displayTime();
    // anders
  } 
    else {
    // stop de tijd en geef een alert melding
    clearInterval(timer);
    alert('De eieren zijn klaar!!!');
  }
}