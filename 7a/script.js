function clearScreen() {
  document.getElementById("result").value = "";
}
function display(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  var eq = document.getElementById("result").value;
  var res = eval(eq);

  document.getElementById("result").value = res;
}
function deleteChar() {
  var eq = document.getElementById("result").value;
  document.getElementById("result").value = eq.substring(0, p.length - 1);
}
