function evals(){
  var t1 = parseInt(document.forms["myform"]["t1"].value);
  var t2 = parseInt(document.forms["myform"]["t2"].value);
  var t3 = parseInt(document.forms["myform"]["t3"].value);
  var reg = document.forms["myform"]["regno"].value;
  var sub = document.forms["myform"]["sub"].value;
  if(reg == "") {
    alert( "Please enter register no." );
    return false;
  }else if(sub == "") {
    alert( "Please enter subject code" );
    return false;
  }else if(isNaN(t1)){
    alert("Please provide Test-1 marks");
    return false;
  }else if(isNaN(t2)){
    alert("Please provide Test-2 marks");
    return false;
  }else if(isNaN(t3)){
    alert("Please provide Test-3 marks");
    return false;
  }else if(t1>20 || t2>20 || t3>20){
    alert("Invalid Marks. Marks range : 0 - 20.Enter Again.");
    return false;
  }else if(t1<0 || t2<0 || t3<0){
    alert("Invalid Marks. Marks range : 0 - 20.Enter Again.");
    return false;
  }
  var max1 = Math.max(t1,t2,t3);
  var min = Math.min(t1,t2,t3);
  var max2 = t1+t2+t3-max1-min;
  var avg = eval((max1+max2)/2);
  alert("Average marks : "+avg);
}
