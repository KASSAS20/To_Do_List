const list = document.querySelector('.list');
const list_end = document.querySelector('.list_end');
const button = document.querySelector('button');
const text = document.querySelector('.text');
const html = document.querySelector('html');

function get_classes(){
    let allElements = document.getElementsByTagName('*');
    let uniqueClasses = new Set();
    for (let i = 0; i < allElements.length; i++) {
        let elementClasses = allElements[i].classList;
        for (let j = 0; j < elementClasses.length; j++) {
            if (elementClasses[j] == 'container' || elementClasses[j] == 'list' || elementClasses[j] == 'text'|| elementClasses[j] == 'list_end'){
                continue;
            }
            uniqueClasses.add(elementClasses[j]);
        }
    }
    let allUniqueClasses = Array.from(uniqueClasses);
    return allUniqueClasses;
}


function add(){
    let new_li = document.createElement('li');
    let new_task = document.createElement('label');
    let check = document.createElement('input');
    let task = text.value
    id = Math.floor(Math.random() * (5000000 - 1)) + 34;
    check.type = 'checkbox';
    check.classList.add(id);
    check.getAttribute('id', id);
    new_task.getAttribute('for', id);
    new_task.classList.add(id);
    new_task.textContent = task;
    new_li.appendChild(check);
    new_li.appendChild(new_task);
    list.appendChild(new_li);
    text.value = "";
    


}


function scip(id, text){
    // let classes = get_classes();
    // console.log(a);
    // let b = document.getElementsByClassName(classes[id])[1];
    // b.removeChild(list);


    let new_li = document.createElement('li');
    let new_task = document.createElement('label');
    let check = document.createElement('input');
    let task = text;
    check.type = 'checkbox';
    check.classList.add(id);
    new_li.classList.add(id);
    check.getAttribute('id', id);
    check.checked = true;
    new_task.getAttribute('for', id);
    new_task.classList.add(id);
    new_task.textContent = task;
    new_li.appendChild(check);
    new_li.appendChild(new_task);
    list_end.appendChild(new_li);
}


function box() {
  let classes = get_classes();

  for (let i = 0; i < classes.length; i++) {
    let element = document.getElementsByClassName(classes[i])[0];
   
    if (element && !list_end.contains(element)) {
        if (element.checked == true) {
            let txt = document.getElementsByClassName(classes[i]);
            txt = txt[1].innerText;
            
            let a = document.getElementsByClassName(classes[i])[1];
            console.log(a);

            // Находим родительский элемент
            let parent = a.parentNode;

            // Удаляем старый чекбокс
            let oldCheckbox = parent.getElementsByTagName('input')[0];
            parent.removeChild(oldCheckbox);

            // Удаляем элемент "a"
            parent.removeChild(a);

            scip(classes[i], txt);}
        else{
            continue;
        }
      }
    }
  }



button.addEventListener('click', add);



let intervalId = setInterval(box, 100);