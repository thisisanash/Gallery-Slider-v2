
import membersData from './members.js'
let node = document.querySelector(".frame");
let prevBtn = document.querySelector(".main #previous");
let nextBtn = document.querySelector(".main #next");

// if Members Data is 1, Hide buttons
if (membersData.length === 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
}
// if Members Data is 2, add copies of data
let member = [...membersData];
if (membersData.length == 2) {
    member = [...membersData, ...membersData]
}

node.innerHTML = member
    .map((person, slideIndex) => {
        const { img, name, title, text } = person
        let position = 'next'
        if (slideIndex === 0) {
            position = 'current'
        }
        if (slideIndex === member.length - 1) {
            position = 'previous'
        }
        if (membersData <= 1) {
            position = 'current'
        }

        let data = `<article class="slide ${position}">
        <div class="img">
            <img src="${img}" alt="${name}"/>
        </div>
        <div class="person">
            <h3>${name}</h3>
            <p>${title}</p>
        </div>
        <p>
            <strong>"</strong>${text}<strong>"</strong>
        </p>
        <div class="quote-icon"></div>
        </article>`

        return data

    }).join('')

const slideFrame = (type) => {
    // Get all three Slides [ active, last, next]
    const current = document.querySelector('.current')
    const previous = document.querySelector('.previous')
    let next = current.nextElementSibling
    if (!next) {
        next = node.firstElementChild
    }

    current.classList.remove('current')
    previous.classList.remove('previous')
    next.classList.remove('next')

    if (type === 'prev') {
        current.classList.add('next')
        previous.classList.add('current')
        next = previous.previousElementSibling

        if(!next){
            next = node.lastElementChild
        }

        next.classList.remove('next')
        next.classList.add('previous')

        return
    }

    current.classList.add('previous')
    previous.classList.add('next')
    next.classList.add('current')
}

nextBtn.addEventListener('click', function(){
    slideFrame();
})
prevBtn.addEventListener('click',  function(){
    slideFrame('prev');
})