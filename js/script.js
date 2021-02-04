const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    numberHour = document.querySelector('.hours'),
    numberMinutes = document.querySelector('.minutes')


function clock() {
  const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds()


    hour.style.transform = `rotate(${hours* 30}deg)`
    min.style.transform = `rotate(${minutes* 6}deg)`
    sec.style.transform = `rotate(${seconds * 6}deg)`

    numberHour.innerHTML = hours < 10 ? ` 0${hours} ` : hours
    numberMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes


    setTimeout(clock, 1000)
}
clock()



const tabLinks = document.querySelectorAll('.tabsItem'),
      tabContent = document.querySelectorAll('.tabsContentItem')
for (const key in tabLinks) {
  if (typeof tabLinks[key] === 'object')
       tabLinks[key].addEventListener('click', function () {
        // console.info("Мы нажали на элемент", this.innerText) ←для пробы
        
        for(let i = 0; i < tabLinks.length; i++){
          tabLinks[i].classList.remove('active')
          tabContent[i].classList.remove('active')
        }
        addActive(this,tabContent[key])
  })
}



function addActive(link, content) { 
  link.classList.add('active')
  content.classList.add('active')
 }


/* СЕКУНДОМЕР */





//  const button =document.querySelector('.stopwatch__btn'),
//        seconds2 = document.querySelector('.stopwatch__seconds'),
//        minutes2 = document.querySelector('.stopwatch__minutes'),
//        hours2   = document.querySelector('.stopwatch__hours')

//  button.addEventListener('click' ,clicked )
 
//  function clicked() {
  
//   if(button.innerHTML === 'start') {
//     seconds2.innerHTML = '99'
//     minutes2.innerHTML= '99'
//     hours2.innerHTML = '99'
//     button.innerHTML = 'stop';
//   }
//  else
//   button.innerHTML = 'start'
//  return tick
// }
// function tick() {
//   seconds2++;
//   if (seconds2 >= 60) { 
//       minutes2++;
    
//   }
//   if (minutes2 >= 60) {
//       hours2++;
   
//   }
// }  

      // Подключение к кнопке старта ↓
const   watchBtn = document.querySelector('.stopwatch__btn'), 
      // Подключение к секундам секунодомера ↓
        secondWatch = document.querySelector('.stopwatch__seconds'),
         // Подключение к минутам секунодомера ↓
        minutesWatch = document.querySelector('.stopwatch__minutes'),
        // Подключение к часам  секунодомера ↓
        hoursWatch = document.querySelector('.stopwatch__hours'),
        // Подключение к дотам  секунодомера ↓
        seconfInfo = document.querySelector('.tabsLink__span');
        

        // Клик ↓                  Функция ↓
watchBtn.addEventListener('click', function () { 
        //  при нажанатии Start ↓
    if (this.innerHTML == 'start') { 
        // Должен выйти Stop ↓
        this.innerHTML = 'stop';
        // И span должен быть красным ↓
        seconfInfo.classList.add('active');
        // Новая переменная let-что мы могли изменять
        let i = 0;
        //  Не понял
        setTimeout(() => stopWatch(this, i), 1000)
        // Если пользователь нажал на stop ↓
    } else if (this.innerHTML == 'stop') {
        // класс active удаляется со spana и становится белым ↓
        seconfInfo.classList.remove('active');
        // Кнопка очищения секундомера добавляется новая кнопка clear ↓
        seconfInfo.classList.add('active_clear');
        this.innerHTML = 'clear';
    } else {
        // В секундомере при нажатии кнопки clear очищается ссекундомер 0ч 0м 0с ↓
        seconfInfo.classList.remove('active_clear');
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
        this.innerHTML = 'start';
    }
})
        // Понял но не могу обьяснить связанео с работой секундомера,минуты,часов 
function stopWatch(el, i) { 
    if (el.innerHTML == 'stop') { 
        if (i == 60) { 
            i = 0;
            secondWatch.innerHTML = i 
            if (minutesWatch.innerHTML == 59) {  
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            } else {
                minutesWatch.innerHTML++
            }
        } else {
            i++ 
            secondWatch.innerHTML = i; 
        }
        // Запуск
        setTimeout(() => stopWatch(el, i), 10);
    } 
} 