document.getElementById('todoid').addEventListener('submit', function(event) {
    event.preventDefault();

let todotask= document.getElementById("todotext").value;
console.log(todotask)

if(todotask === "")
{
    alert("Please enter a task");
    return;
}

let li= document.createElement("li");
li.className="todo-item";

li.appendChild(document.createTextNode(todotask))

let completebtn = document.createElement("button");
completebtn.className = "complete-btn";
completebtn.appendChild(document.createTextNode("✔"));

let deletebtn = document.createElement("button");
deletebtn.className = "delete-btn";
deletebtn.appendChild(document.createTextNode("X"));

li.appendChild(completebtn);
li.appendChild(deletebtn);


document.getElementById("todoul").append(li);
document.getElementById('todotext').value = '';

completebtn.addEventListener('click',function(){
    if(li.style.textDecoration === 'line-through'){
        li.style.textDecoration = 'none';
    } else{
        li.style.textDecoration = 'line-through';
        
    }
})


    deletebtn.addEventListener('click', function() {
        document.getElementById('todoul').removeChild(li); 
    });
});


