//score_storage.js

/**
 * Get the user score locally saved.
 * If score is not saved then getScore creates a new item into the
 * local storage.
 * 
 * @returns Number
 */
export function getScore() {
  if (!localStorage.getItem('score')) {
    localStorage.setItem('score', '0');
  }

  return Number(localStorage.getItem('score'));
}

/**
 * setScore save the scoreNumber into local storage.
 * 
 * @param {Number} scoreNumber Score to be saved
 */
export function setScore(scoreNumber) {
  let data = String(scoreNumber);

  localStorage.setItem('score', data);
}