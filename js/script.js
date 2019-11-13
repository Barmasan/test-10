let chooseItemBlock = document.querySelector('.choose__item-wrapper');
let chooseItemLabel = document.querySelector('.choose__label');

chooseItemBlock.addEventListener('click', setTypeSection, false);
chooseItemLabel.addEventListener('click', setTypeSection, false);
chooseItemLabel.onmouseover = chooseItemLabel.onmouseout = chooseItemBlock.onmouseover = chooseItemBlock.onmouseout = handler;

function handler(event) {
    if (event.type === 'mouseover')
        document.querySelector('.choose__hover-border').style.display = 'block';
    if (event.type === 'mouseout')
        document.querySelector('.choose__hover-border').style.display = 'none';
}

//document.querySelector('.choose__hover-border').style.display = 'block';


function setTypeSection() {
    let chooseBG = document.querySelector('.choose-bg');
    let typeBG = document.querySelector('.type-bg');
    let chooseContentToHide = document.getElementById('chooseContentToHide');
    let chooseHeader = document.querySelector('.choose__header');
    let chooseLabels = document.querySelector('.choose__labels');
    let chooseLabelsWrapper = document.querySelector('.choose__labels-wrapper');
    let chooseContainer = document.getElementById('chooseContainer');
    let typeNav = document.getElementById('typeNav');
    let typeContainer = document.getElementById('typeContainer');


    chooseBG.classList.add('unsetImage');
    typeBG.classList.add('setImage');
    chooseHeader.classList.add('hide-choose-animation');
    chooseContentToHide.classList.add('hide-choose-animation');
    chooseLabels.classList.add('hide-choose-txt-animation');

    setTimeout("chooseContainer.classList.add('disp-none');", 1500);
    setTimeout("typeNav.classList.add('fade-in-animation');", 1500);
    setTimeout("typeNav.classList.remove('disp-none');", 1800);
    setTimeout("typeContainer.classList.remove('disp-none');", 1800);
    setTimeout("document.querySelector('.choose__labels-wrapper').classList.add('disp-none');", 2000);


}

