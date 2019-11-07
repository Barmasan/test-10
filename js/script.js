let el = document.querySelector('.choose__item_wrapper');
    el.addEventListener('click', setTypeSection, false);

    function setTypeSection() {
        let chooseBG = document.querySelector('.choose-bg');
        let typeBG = document.querySelector('.type-bg');
        chooseBG.classList.add('unsetImage');
        typeBG.classList.add('setImage');
    }