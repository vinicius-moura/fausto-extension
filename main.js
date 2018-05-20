
window.addEventListener('load', showNotification);

//function to get actual hours
function getCurrentTime() {
  var date = new Date();
  return date.getHours();
}

function showNotification() {
  var hours = getCurrentTime();
  var message = hours + " E POUCO BIXO";
  var notification = new Notification('SÃO EXATAMENTE', {
     icon: 'https://static-s.aa-cdn.net/img/gp/20600004678252/Oq2fgWcleIzU0ARnTRkFwNe0dfJDjG_RJSAG70bIn8HhhZkxuybr_UYub93pFx-knUI=w300?v=1',
     body: message,
   });
}
