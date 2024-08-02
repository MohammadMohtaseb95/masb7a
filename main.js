function incrementCounter(counterId, soundId) {
  const counterElement = document.getElementById(counterId);
  let count = parseInt(counterElement.textContent);

  count = (count + 1) % 100;
  counterElement.textContent = count;

  const sound = document.getElementById(soundId);
  sound.play();
}

function resetCounter(counterId) {
  const counterElement = document.getElementById(counterId);
  counterElement.textContent = 0;
}
