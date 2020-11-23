export const PLAYER_STATUS = {
  READY: 0, LOADING: 1, PLAY: 2, PAUSE: 3
}

export function toHHMMSS(data) {
  if (Infinity === data) {
    return `00:00`;
  }

  var sec_num = parseInt(data, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours !== "00") return hours + ":" + minutes + ":" + seconds;
  return minutes + ":" + seconds;
}
