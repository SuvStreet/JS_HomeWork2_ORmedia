var dataInput = document.querySelector("input[type='text']");
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('todoAplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoAplication');
        deleteTodo();
    }
};

/* addEventListener - обработчик события с последующем вызовом функции */

dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete ';
        let now = new Date();
        
        var newTodo = this.value; // получение value из input
        this.value = ''; // очистка поля ввода

        ulSpisok.appendChild(newLi).append(newSpan, newTodo);
        ulSpisok.appendChild(newLi).append(newTodo + " [", now.getDate() + "." + now.getMonth() + "." + now.getFullYear() + "]");

        deleteTodo();
    }
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoAplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoAplication', ulSpisok.innerHTML);
});

deleteTodo();
loadTodo();
