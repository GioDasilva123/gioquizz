const quizData = [
    {
        question: "Which Country Won The World Cup in 2010?",
        a: "Germany",
        b: "Spain",
        c: "Argentina",
        d: "Netherlands",
        correct: "b",
    },
    {
        question: "Who Was The First President Of The United States?",
        a: "Abraham Lincoln",
        b: "George Bush",
        c: "George Washington",
        d: "Jhon Kenedy",
        correct: "c",
    },
    {
        question: "What is The Capital Of France?",
        a: "Lille",
        b: "Paris",
        c: "Monaco",
        d: "Lyon",
        correct: "b",
    },
    {
        question: "What Year The 9/11 Accident Happened?",
        a: "2001",
        b: "1995",
        c: "1982",
        d: "none of the above",
        correct: "a",
    },
{
        question: "Who was The Main Actor in the Titanic Movie?",
        a: "Leonardo Di Caprio",
        b: "Brad Pitt",
        c: "Tom Cruise",
        d: "Michael B Jordan",
        correct: "a",
    },
 {
        question: "Who Was The First Astronaut That Walked on The Moon?",
        a: "Buzz Aldrin",
        b: "Neil Armstrong",
        c: "Michael Collins",
        d: "Gene Cernan",
        correct: "b",
    },
 {
        question: "What is the Largest Planet In Our Solar System?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
    },
 {
        question: "What is The Most Popular Programming Language?",
        a: "JavaScript",
        b: "C++",
        c: "C",
        d: "Python",
        correct: "a",
    },
 {
        question: "Who Was The First Woman to win a Nobel Prize?",
        a: "Mother Teresa",
        b: "Marie Curie",
        c: "Emily Greene",
        d: "Wangari Muta",
        correct: "b",
    },
 {
        question: "What is the smallest Country in The World by Land Area?",
        a: "Liechtenstein",
        b: "Gibraltar",
        c: "San Marino",
        d: "Vatican City",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
} 

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            let quizResults = document.createElement('div')
            quizResults.classList.add('quiz-results')
            quizData.forEach((questionData, index) => {
                let resultEl = document.createElement('p')
                let answerText = ''
                switch (questionData.correct) {
                    case 'a':
                        answerText = questionData.a
                        break
                    case 'b':
                        answerText = questionData.b
                        break
                    case 'c':
                        answerText = questionData.c
                        break
                    case 'd':
                        answerText = questionData.d
                        break
                    default:
                        break
                }
                resultEl.innerHTML = `${index + 1}. ${questionData.question} - ${answerText}`
                quizResults.appendChild(resultEl)
            })
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <h3>Correct answers:</h3>
            `
            quiz.appendChild(quizResults)
            let reloadBtn = document.createElement('button')
            reloadBtn.innerText = 'Reload'
            reloadBtn.addEventListener('click', () => location.reload())
            quiz.appendChild(reloadBtn)
        }
    }
})
