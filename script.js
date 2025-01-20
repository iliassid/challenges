function changeP(){
    let mypr = document.getElementById("myp");
    mypr.innerHTML="hello word";
}

function addLi(){
    const ul = document.getElementById("myul");
    const li = document.createElement("li");
    li.textContent= "the second one";
    ul.appendChild(li);
}


function changebtn(){
    const btn = document.getElementById("mybtn");
    btn.style.backgroundColor="blue";
    btn.style.color="white"


}
function btnClick (){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`button clicked: ${button.textContent}`);
        });
    });
}
btnClick();

  
document.getElementById("myForm").addEventListener("submit",function validateForm(event) {
  
    event.preventDefault();
   const nameInput = document.getElementById("name");
   const errorMessage = document.getElementById("errorMessage");
   if (nameInput.value.trim() === "") {
 
     errorMessage.style.display = "inline";
   } else {
     errorMessage.style.display = "none";
   }
 }
);



  function hideDiv(){
        const toggleButton = document.getElementById("secondBtn");
        const toggleDiv = document.getElementById("mydiv");
        toggleButton.addEventListener("click", () => {
            if (toggleDiv.style.display === "none") {
              toggleDiv.style.display = "block";
              toggleButton.textContent = "Hide Div";
            } else {
              toggleDiv.style.display = "none";
              toggleButton.textContent = "Show Div";
            }
          });
          toggleDiv.style.display = "block";
          toggleButton.textContent = "Hide Div";
    }


    setInterval(function(){
      document.getElementById('dateTime').textContent= new Date().toLocaleTimeString();
    },1000);




    


