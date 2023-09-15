let item = document.querySelector('#item');
let todobox = document.querySelector('#to-do-box');

item.addEventListener(
    "keyup",
    function(event){
    if(event.key == "Enter")
    {
        addtodo(this.value);
        this.value = "";
    }
    }
)
const addtodo = (item) =>{
 const listitem = document.createElement("li");
 listitem.innerHTML = `
      ${item}
      <i class="fa-solid fa-trash"  id="id_fas"></i>
`;
listitem.addEventListener(
    "click",
    function(){
        this.classList.toggle('done');
        console.log(" An Item is Checked");
    }
 )
 listitem.querySelector("i").addEventListener(
    "click",
    
    function(){
        listitem.remove();
        console.log(" An Item is Removed");
    }

 )
 todobox.appendChild(listitem);
 

}
