var dataInput = document.querySelector("input[type='text']");
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var infoDeveloperBtn = document.getElementById('infoDeveloper');
var defaultName = 'Kolotusha Dmitrij Nikolaevich';

document.addEventListener("DOMContentLoaded", loadTodo());

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
        strikeOutTodo();
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
            strikeOutTodo();
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
    document.getElementById("pVarning").style.display = 'none';
});

/* Информация о пользователе */
infoDeveloperBtn.addEventListener('click', function(){
    defaultName = prompt('User information', defaultName);
});

/* Текст зачеркнуть */
function strikeOutTodo(){
    let li = document.getElementsByTagName('li');
    for(let list of li){
        list.addEventListener('click', function(){
            this.style.textDecoration = 'line-through';
        });
    }
};

/* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
} */

/* Изменение цвета background при нажатии мышкой */
/* document.getElementById('divApp').addEventListener('click', function(){
    var R = getRandomIntInclusive(0, 255);
    // alert("Значение R " + R);
    var G = getRandomIntInclusive(0, 255);
    // lert("Значение G " + G);
    var B = getRandomIntInclusive(0, 255);
    // alert("Значение B " + B);
    document.getElementById('divApp').style.backgroundColor = 'rgb(' + R + ', ' + G + ', ' + B + ')';
}); */
