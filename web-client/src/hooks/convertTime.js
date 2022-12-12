let convertTimeMilliseconds = (minutes, seconds) => {
  let time = minutes * 60000 + seconds * 1000;
  return time;
};

let convertTimeReadable = (milliseconds) => {
  let seconds = Math.floor((milliseconds / 1000) % 60);
  let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  return {
    minutesSeconds: minutes + ":" + seconds,
    hoursMinutesSeconds: hours + ":" + minutes + ":" + seconds,
  };
};

module.exports = {
  convertTimeMilliseconds,
  convertTimeReadable,
};
