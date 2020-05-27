var dataInput = document.querySelector("input[type='text']");
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var infoDeveloperBtn = document.getElementById('infoDeveloper');
var defaultName = 'Kolotusha Dmitrij Nikolaevich';

/* Удаление задачи нажимая Delete */
function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

/* Проверка localStorage на содержимое задач */
function loadTodo(){
    if(localStorage.getItem('todoAplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoAplication');
        deleteTodo();
    }
};

/* Названия месяцев для их вывода */
function nameMonth(){
    let name_month = new Date();
    let month = new Array(12);
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="Aug";
    month[8]="Sept";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";
    return month[name_month.getMonth()];    
}

/* addEventListener - обработчик события с последующем вызовом функции */

/* Добавление задачи по нажатию Enter = 13 */
dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        if (dataInput.value.trim() === ""){
            document.getElementById("pVarning").style.display = 'block';
        }
        else {
            var newLi = document.createElement('li');
            var newSpan = document.createElement('span');
            newSpan.innerHTML = 'Delete ';
            let now = new Date();
            
            var newTodo = this.value; // получение value из input
            this.value = ''; // очистка поля ввода

            ulSpisok.appendChild(newLi).append(newSpan, newTodo + " [", now.getDate() + "." + nameMonth() + "." + now.getFullYear() + " " + 
            now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds() + "] " + defaultName);

            document.getElementById("pVarning").style.display = 'none';

            deleteTodo();
        }
    }
});

/* Сохронить/Обновить localStorage */
saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoAplication', ulSpisok.innerHTML);
});

/* Очистить localStorage */
clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoAplication', ulSpisok.innerHTML);
});

infoDeveloperBtn.addEventListener('click', function(){
    defaultName = prompt('User information', defaultName);
});


deleteTodo();
loadTodo();
