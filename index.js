const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } 
  
  toggleSwitch.addEventListener("change", switchTheme, false);

// <=========================calculator===========================>//

let input = document.getElementById("input");
let output = document.getElementById("output");
let operators = document.querySelector(".symbols");
let num = document.getElementById("num");
  function calculate(data){
    switch(data){
      case'AC':
      input.innerHTML = ""
      // output.innerHTML = ;
      break;
      case 'C':
        input.innerHTML = input.innerHTML.substr(input.innerHTML.length-1);
        output.innerHTML = math.evaluate(input.innerHTML)=== undefined ? 0:math.evaluate(input.innerHTML);
      break;

      case "=":
        output.innerHTML =  math.evaluate(input.innerHTML)=== undefined ? 0:math.evaluate(input.innerHTML);
      break;
      case '.': 
        if(input.innerHTML.lastIndexOf('.')== -1)
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("+")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("-")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("*")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("/")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("%")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=data;
        }        
        break;
      case "+":
        if(input.innerHTML.lastIndexOf('+')== 0)
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('+'))
        {
          input.innerHTML+=data;
        }
        break;
      case "-":
        if(input.innerHTML.lastIndexOf('-')== 0)
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('-'))
        {
          input.innerHTML+=data;
        }
        break;
      case "*":
        if(input.innerHTML.lastIndexOf('*')== 0)
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+=data;
        }
        break;
        case "/":
        if(input.innerHTML.lastIndexOf('/')== 0)
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('/'))
        {
          input.innerHTML+=data;
        }
        break;
        case "%":
        if(input.innerHTML.lastIndexOf('%')== 0)
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
       else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('%'))
        {
          input.innerHTML+=data;
        }
        break;
    default:
    input.innerHTML+=data;
    } 
  }
 

  //======================================================onkeypress==============================================//
  function keyPress(event){
    // alert(event.keyCode =='37')
    if (event.keyCode == '49') {
      input.innerHTML+="1";
    }
    else if(event.keyCode == '50'){
      input.innerHTML+="2";
    }
    else if(event.keyCode == '51'){
      input.innerHTML+="3";
    }
    else if(event.keyCode == '52'){
      input.innerHTML+="4";
    }
    else if(event.keyCode == '53'){
      input.innerHTML+="5";
    }
    else if(event.keyCode == '54'){
      input.innerHTML+="6";
    }
    else if(event.keyCode == '55'){
      input.innerHTML+="7";
    }
    else if(event.keyCode == '56'){
      input.innerHTML+="8";
    }
    else if(event.keyCode == '57'){
      input.innerHTML+="9";
    }
    else if(event.keyCode == '48'){
      input.innerHTML+="0";
    }
    else if(event.keyCode == '13'){
        output.innerHTML =  math.evaluate(input.innerHTML)=== undefined ? 0:math.evaluate(input.innerHTML);
    }
    else if(event.keyCode == "37"){
      if(input.innerHTML.lastIndexOf('%')== 0)
      {
        input.innerHTML+="%";
      }
     else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
     else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
     else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
      else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('%'))
      {
        input.innerHTML+="%";
      }
    }
    else if(event.keyCode == "43"){
      if(input.innerHTML.lastIndexOf('+')== 0)
      {
        input.innerHTML+="+";
      }
     else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
     else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
     else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
      else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('+'))
      {
        input.innerHTML+="+";
      }
    }
    else if(event.keyCode == "45"){
      if(input.innerHTML.lastIndexOf('-')== 0)
      {
        input.innerHTML+="-";
      }
     else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
     else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
     else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
      else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('-'))
      {
        input.innerHTML+="-";
      }
    }
    else if(event.keyCode == "42"){
      if(input.innerHTML.lastIndexOf('*')== 0)
        {
          input.innerHTML+="*";
        }
       else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
       else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
       else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
        else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('*'))
        {
          input.innerHTML+="*";
        }
    }
    else if(event.keyCode == "47"){
      
      if(input.innerHTML.lastIndexOf('/')== 0)
      {
        input.innerHTML+="/";
      }
     else if(input.innerHTML.lastIndexOf("1")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
     else if(input.innerHTML.lastIndexOf("2")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
     else if(input.innerHTML.lastIndexOf("3")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("4")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("5")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("6")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("7")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("8")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("9")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
      else if(input.innerHTML.lastIndexOf("0")>input.innerHTML.lastIndexOf('/'))
      {
        input.innerHTML+="/";
      }
    }
    else if(event.keyCode == "46"){

      if(input.innerHTML.lastIndexOf('.')== -1)
        {
          input.innerHTML+=".";
        }
       else if(input.innerHTML.lastIndexOf("+")>input.innerHTML.lastIndexOf('.'))
        {          
          input.innerHTML+=".";
  
        }
       else if(input.innerHTML.lastIndexOf("-")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=".";

        }
       else if(input.innerHTML.lastIndexOf("*")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=".";
  
        }
       else if(input.innerHTML.lastIndexOf("/")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=".";
  
        }
       else if(input.innerHTML.lastIndexOf("%")>input.innerHTML.lastIndexOf('.'))
        {
          input.innerHTML+=".";
  
        }        
        
      
    }
    else{
      input.innerHTML+=data;
    }
  }
function clearFun(event){
   if(event.keyCode == "8"){
    event.preventDefault();
    input.innerHTML = input.innerHTML.substr(0,input.innerHTML.length-1);
    output.innerHTML = math.evaluate(input.innerHTML)=== undefined ? 0:math.evaluate(input.innerHTML);
  }
  else if(event.keyCode == "27"){
    event.preventDefault();
    input.innerHTML = ""
    // output.innerHTML = 0;
  }
}