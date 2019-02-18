
function track() {
  var firstValue =document.getElementById("FirstValue");
  var secondValue =document.getElementById("SecondValue");
  var thirdValue =document.getElementById("ThirdValue");
  if (firstValue.value === "" || secondValue.value === "" || thirdValue.value === "")
  {
    alert("please input values!");
  }
  else
  {
    var ans1=parseInt(firstValue.value);
    var ans2=parseInt(secondValue.value);
    var ans3=parseInt(thirdValue.value);
    function check(num1 , num2){
      return num1 + num2;
    }
    var possibility1 = check(ans1 , ans2);
    var possibility2 = check(ans2 , ans3);
    var possibility3 = check(ans1 , ans3);
    if(possibility1 === ans3 || possibility1 < ans3){
            alert("Not a Triangle!");
    }
    else if (possibility2 === ans1 || possibility2 < ans1){
            alert("Not a Triangle!");
    }
    else if (possibility3 === ans2 || possibility3 < ans2){
            alert("Not a Triangle!");
    }
    else{
      if (ans1 === ans2 && ans2 === ans3 && ans1 === ans3){
        alert("Your triangle is an Equilateral triangle!")
      }
      else if (ans1 === ans2 || ans2 === ans3 || ans3 === ans1) {
            alert("Your triangle is an Isosceles tirangle!")
      }
      else {
        alert("Your triangle is a Scalene")
      }
    }
  }


}
