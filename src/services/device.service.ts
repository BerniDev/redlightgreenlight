export const handleVibrate = (time = 200) => {
  if (navigator.vibrate) {
    navigator.vibrate(time);
  } else {
    console.log('La API de vibración no está soportada en este dispositivo.');
  }
};