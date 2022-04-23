let button = document.querySelector(".btn_add");
let input = document.querySelector("input");
let list = document.querySelectorAll("li");

button.addEventListener("click", function(){
  let lis = document.createElement("li");
  lis.innerHTML ='<i class="fa fa-close"></i>';
  let values = document.createTextNode(input.value);
  lis.appendChild(values);
  console.log(lis);


  if(input == " ")
  {
    alert("Enter something!!!")
  }
  else{
    document.querySelector(".mylist").appendChild(lis);
  }

  document.querySelector("#ip").value = "";

  let closed = document.querySelectorAll(".fa-close");
  for (let i = 0; i < closed.length; i++) {
    closed[i].onclick = function() {
    let ele = this.parentElement;
    ele.style.display = "none";
  }
}

});

let ulist = document.querySelector("ul");
ulist.addEventListener("click", function(a){
  if(a.target.tagName === "LI")
  {
    a.target.classList.toggle("checked");
  }
},false);

// let check = document.querySelectorAll(".fa-check");
// for (let i = 0; i < check.length; i++) {
//   check[i].onclick = function() {
//     let ele = this.parentElement;
//     ele.style.display = ele.innerText = "Task Completed";
//   }
// }
