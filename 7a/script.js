const result = document.getElementById("result");

function clearScreen() {
  result.value = "";
}
function display(value) {
  result.value += value;
}
function calculate() {
	var eq = result.value;
  	var res = eval(eq);
  	result.value = res.toFixed(2);
}
function deleteChar() {
  var eq = result.value;
  result.value = eq.substring(0, eq.length - 1);
}
