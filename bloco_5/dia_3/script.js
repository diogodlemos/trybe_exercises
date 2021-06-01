function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth(days) {
  const fatherElement = document.querySelector('#days');
  for (let index = 0; index < days.length; index += 1) {
    const day = days[index];
    const dayListItemDez = document.createElement('li');
    dayListItemDez.innerHTML = day;
    dayListItemDez.className = 'day';
    if (day === 24|| day === 31 ) {
      dayListItemDez.className = 'day holliday';
    } 
    if (day === 4|| day === 11 || day === 18 || day === 25) {
      if(day === 25) {
        dayListItemDez.className = 'day holliday friday';
      } else {
        dayListItemDez.className = 'day friday';
      }
    }

    fatherElement.appendChild(dayListItemDez);

  }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

createDaysOfTheMonth(dezDaysList);

function createButtonHolliday(nameButton) {
  let fatherElement = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = nameButton;
  button.className = 'btn-holliday';
  fatherElement.appendChild(button);
}
const nameButton = 'Feriados';
createButtonHolliday(nameButton);



function buttonAction() {
  let button = document.querySelector('.btn-holliday');
  let hollidays = document.querySelectorAll('.holliday');
  button.addEventListener('click', chageBackGroundColor);
  function chageBackGroundColor() {
    for(let index = 0; index < hollidays.length; index += 1) {
     if( hollidays[index].style.backgroundColor === 'red'){
      hollidays[index].style.backgroundColor = 'rgb(238,238,238)';
     } else {
      hollidays[index].style.backgroundColor = 'red';
     }
    }
  }
}

buttonAction();

function createButtonFriday(nameButton) {
  let fatherElement = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = nameButton;
  button.className = 'btn-friday';
  fatherElement.appendChild(button);
}
const nameButtonFriday = 'Sexta-feira';
createButtonFriday(nameButtonFriday);

function buttonActionFriday() {
  let button = document.querySelector('.btn-friday');
  let friday = document.querySelectorAll('.friday');
  button.addEventListener('click', chageText);
  function chageText() {
    let fridayDays = [4, 11, 18, 25];
    let contador = 0;
    for(let index = 0; index < friday.length; index += 1) {
     if( friday[index].innerText === 'SEXTOU!') {
      friday[index].innerText = fridayDays[contador];
      contador += 1;
     } else {
      friday[index].innerText = 'SEXTOU!';
     }
    }
  }
}

buttonActionFriday();

function mouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
  })
}

mouseOver();

function mouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
  })
}

mouseOut();

function tarefa(strTarefa) {
  let elementFather = document.querySelector('.my-tasks');
  let tagSpan = document.createElement('span');
  tagSpan.innerText = strTarefa;
  elementFather.appendChild(tagSpan);
}
let tarefa1 = 'estudar';
tarefa(tarefa1);

function creatrLegend(strColor) {
  let elementFather = document.querySelector('.my-tasks');
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = strColor;
  elementFather.appendChild(div);
}
creatrLegend('blue');

function taskSelect() {
  let div = document.querySelector('.task');
  let selectedTask = document.getElementsByClassName('.task selected');
  div.addEventListener('click', function(event){
    if(selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

taskSelect();
