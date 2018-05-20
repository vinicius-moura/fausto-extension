
window.addEventListener('load', getActualHours);

//function to get actual hours
function getActualHours() {
  var date = new Date();
  var hours = date.getHours();
  console.log(hours);
  console.log(document.querySelector("[data-hours]"));
  document.querySelector("[data-hours]").innerHTML = hours;
}
