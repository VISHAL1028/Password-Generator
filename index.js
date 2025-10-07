const btn = document.getElementById("btn");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");

const Uppercase = document.getElementById("capLet")
const Lowercase = document.getElementById("small")
const Number = document.getElementById("number")
const Symbol = document.getElementById("symbol")
const  copybtn =document.getElementById("copy-btn")




// show the slider's initial/default value on page load
rangeValue.innerText = slider.value;

slider.addEventListener("input", (e) => {
  rangeValue.innerText = e.target.value;
});

btn.addEventListener("click", () => {
  // console.log("New Password Generated")
  let capitalLetter = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let smallLetter = `abcdefghijklmnopqrstuvwxyz`;
  let numberstr = `0123456789`;
  // symbols for password generation (use double quotes so embedded single-quote and double-quote are handled)
  let symbolstr = "!@#$%^&*_;',.:\"<>/?|'";

  let finalStr= ``

   if(Uppercase.checked){
      finalStr += capitalLetter;
   }

    if(Lowercase.checked){
      finalStr += smallLetter;
   }
       if(Number.checked){
      finalStr += numberstr;
   }
       if(Symbol.checked){
      finalStr += symbolstr;
   }

   if(finalStr === ``){
    alert("Please Select atleast  one field");
    return
   }

  let latestPass= ``
   


  for(let i=0; i<slider.value; i++){
        let randomnumber=Math.floor(Math.random()*finalStr.length)
        // latestPass+= finalStr.charAt(randomnumber)
         latestPass+= finalStr[randomnumber]
  }

  newPass.innerText = `${latestPass}`;


});

copybtn.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(newPass.innerText)

    
})
