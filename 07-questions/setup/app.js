//using selectors inside the element
// traversing the dom - moving up and down the dom tree

const questionBtn = document.querySelectorAll('.question-btn')

questionBtn.forEach(function(questionBtn){
    questionBtn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    })
})

