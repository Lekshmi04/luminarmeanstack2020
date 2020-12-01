var buttons = document.querySelectorAll('button');
var display=document.querySelector(".display");
 //display=(num)=>{
 //   txt.value+=num;
//}
//clrscr=()=>{
  //   txt.value="";
////}
//ev=()=>{
 //   let data=eval(txt.value);
 //   txt.value=data;
//}
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });
  
  // calculate function
  function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      // check if the display is not empty then only do the calculation
      if (display.value !== '') {
        // calculate and show the answer to display
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on display
      display.value = '';
    } else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }