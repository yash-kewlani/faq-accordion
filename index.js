let questions = document.getElementsByClassName("question");

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        let p = questions[i].querySelector('p');
        let h2 = questions[i].querySelector('h2');
        let img = questions[i].querySelector('img');
        if(p.classList.contains('hide')) {
            p.classList.remove('hide');
            p.classList.add('show');
            h2.classList.remove('box');
            img.setAttribute('src', "./assets/images/icon-minus.svg");
        }
        else {
            p.classList.remove('show');
            p.classList.add('hide');
            h2.classList.add('box')
            img.setAttribute('src', "./assets/images/icon-plus.svg");
        }
    });
}