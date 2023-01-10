function writeToScreen(message, alignRight) {
  let pre = document.createElement("p");
  if (alignRight) {
    pre.classList.add('right');
  }
  else {
    pre.classList.add('left');
  }
  pre.innerHTML = message;
  output.appendChild(pre);
  output.scrollTop = output.scrollHeight;
}

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  mapLink = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">
  Гео-локация</a>`;
  writeToScreen(mapLink, _USER);
  websocket.send(mapLink);
}

const url = 'wss://echo-ws-service.herokuapp.com';
const message_text = document.getElementById('message_text');
const btnSend = document.getElementById('btn_send');
const btnGeo = document.getElementById('btn_geo');
const output = document.getElementById("chat");
let websocket;
const _USER = true;
const _SERVER = false;

websocket = new WebSocket(url);
  websocket.onmessage = function(evt) {
    if (!~evt.data.indexOf("Гео-локация"))
      writeToScreen(evt.data);
  };

btnSend.addEventListener('click', () => {
  const message = document.getElementById('message_text').value;
  writeToScreen(message, _USER);
  websocket.send(message);
});

btnGeo.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
});
