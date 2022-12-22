function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function creatDaysOfMonth() {
  let getDaysList = document.getElementById('days')

  for (let index = 0; index < decemberDaysList.length; index += 1){
    let day = decemberDaysList[index]
    let dayTag = document.createElement('li');
    dayTag.classList.add('days');
    dayTag.innerHTML = day;

    if (day === 24 || day === 31) {
      dayTag.classList.add('holiday');
      getDaysList.appendChild(dayTag);
    } else if (day === 4 || day === 11 || day === 18) {
      dayTag.classList.add('friday');
      getDaysList.appendChild(dayTag);
    } else if (day === 25) {
      dayTag.classList.add('friday');
      dayTag.classList.add('holiday');
      getDaysList.appendChild(dayTag);
    } else {
      getDaysList.appendChild(dayTag)
    }
  }
}
creatDaysOfMonth();

function creatButtonHoliday() {
  let getButtonContainer = document.getElementsByClassName('buttons-container')[0];
  let button1 = document.createElement('button');
  button1.id = 'btn-holiday';
  button1.innerText = 'Feriados';
  getButtonContainer.appendChild(button1)
}
creatButtonHoliday()

function changeColorHoliday() {
  let getHolidayButton = document.getElementById('btn-holiday');
  let getHolidays = document.getElementsByClassName('holiday');
  let originalColor = 'rgb(238,238,238)';
  let newColor = 'purple';
  getHolidayButton.addEventListener('click', function() {

    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === newColor) {
        getHolidays[index].style.backgroundColor = originalColor
      } else {
        getHolidays[index].style.backgroundColor = newColor;
      }
    }
  })
}
changeColorHoliday();

function creatButtonFriday() {
  let getButtonContainer = document.getElementsByClassName('buttons-container')[0];
  let button1 = document.createElement('button');
  button1.id = 'btn-friday';
  button1.innerText = 'Sexta-feira';
  getButtonContainer.appendChild(button1)
}
creatButtonFriday();


function textModify () {
  let getFridays = document.getElementsByClassName('friday');
  let getFridayButton = document.getElementById('btn-friday');
  let dayChange = 'SEXTA-FEIRA';
  let originalDays = [4, 11, 18, 25];

  getFridayButton.addEventListener('click', function (){
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerText !== dayChange) {
        getFridays[index].innerText = dayChange;
      } else {
        getFridays[index].innerText = originalDays[index]
      }
    }
  })
}
textModify(0);

function zoomInElement () {
  let daysZoom = document.getElementById('days');
  daysZoom.addEventListener('mouseover', function (event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}
function zoomOutElement() {
  let daysZoom = document.getElementById('days');
  daysZoom.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
zoomInElement();
zoomOutElement();

function addTask() {
  let getMyTask = document.getElementsByClassName('my-tasks')[0];
  let createSpan = document.createElement('span');
  createSpan.innerText = 'cozinhar';
  getMyTask.appendChild(createSpan);
}
addTask();

function colorLegend (cor){
  let getMyTask = document.getElementsByClassName('my-tasks')[0];
  let createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = cor
  getMyTask.appendChild(createDiv);
}
colorLegend('green');

function taskSelect() {
  let getSelectedTask = document.getElementsByClassName('task selected')
  let getTask = document.getElementsByClassName('task')[0];
  getTask.addEventListener('click', function(event) {
    if (getSelectedTask.length !== 1) {
      event.target.classList = 'task selected'
    } else {
      event.target.classList = 'task'
    }
  })
}
taskSelect()