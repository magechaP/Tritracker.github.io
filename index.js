var firstValue =document.getElementById("FirstValue");
var secondValue =document.getElementById("SecondValue");
var thirdValue =document.getElementById("ThirdValue");

function track() {
  if (firstValue === "" || secondValue === "" || thirdValue === "")
  {
    alert("please input values!")
  }
  else
  {
    var ans1=ParseInt(firstValue.value);
    var ans2=ParseInt(secondValue.value);
    var ans3=ParseInt(thirdValue.value);
    function check(num1 , num2){
      return num1 + num2;
    }
    
  }
}
