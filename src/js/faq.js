
let openers = document.querySelectorAll('.faq-top');
let faqAnswer = document.querySelectorAll('.faq-answer');

function removeOpenClass() {
    faqAnswer.forEach((faqAnswer) => faqAnswer.classList.remove('show-answer'));
  }

for (let i = 0; i < openers.length; i++) {
    openers[i].onclick = function openAnswer() {
        removeOpenClass();
        // faqAnswer[i].classList.add('show-answer');
        faqAnswer[i].classList.toggle('show-answer');
    }
}
