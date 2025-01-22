//1
function changeP(){
    let mypr = document.getElementById("myp");
    mypr.innerHTML="hello word";
}
//2
function addLi(){
    const ul = document.getElementById("myul");
    const li = document.createElement("li");
    li.textContent= "the second one";
    ul.appendChild(li);
}

//3
function changebtn(){
    const btn = document.getElementById("mybtn");
    btn.style.backgroundColor="blue";
    btn.style.color="white"


}
//4

/*
function btnClick (){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`button clicked: ${button.textContent}`);
        });
    });
}
btnClick();
*/
//5
  
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

//6

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

//7
    setInterval(function(){
      document.getElementById('dateTime').textContent= new Date().toLocaleTimeString();
    },1000);

//8
    function removeIt(){
      const removeMe = document.getElementById('removeMe');
      const removeBtn = document.getElementById('removeBtn');
      removeBtn.addEventListener("click", ()=>{
        if (removeMe) {
          removeMe.remove();
          alert('element has been removed');
        }else{
          alert('there is no element to remove');
        }
      })
    }
//9

function changeTheImg(){
  const myimg=document.getElementById('myimg');
  const changeimg=document.getElementById('changeimg');

  changeimg.addEventListener('click', ()=>{
    myimg.src='/imgs/pexels-pixabay-209831.jpg';
  })
}

//10

function counter(){
  let myCounter=document.getElementById('myCounter');
  let increment=document.getElementById('increment');
  let Counter=1;

  increment.addEventListener("click", ()=>{
    Counter++;
    myCounter.textContent=Counter;
    
  });
}

//11
const myp=document.getElementById('mypr');
myp.addEventListener('mouseenter',()=>{
    myp.classList.add('hovered');
});
myp.addEventListener('mouseleave',()=>{
    myp.classList.remove('hovered');
});




//12
const stuff=["car", "bike", "rollers", "hoverboard"];

const myselect=document.getElementById('myselect');

stuff.forEach(mystuff =>{
    const integrate= document.createElement("option");
    integrate.textContent=mystuff;
    myselect.appendChild(integrate);
});


//13

function myfun(){
  document.querySelectorAll('table tr').forEach(row => {
      row.addEventListener('click', () => {
        document.querySelectorAll('table tr').forEach(r => r.classList.remove('highlight'));
        row.classList.add('highlight');
      });
    });
}