// test questions and answers
const questions = [
    {
        question: "What is JavaScript?",
        choices: [ "A programming language", "A database", "A framework", "A library" ],
        correctAnswer: "A programming language"
    },
    {
        question: "What kind of language is JavaScript?",
        choices: [ "Functional", "Procedural", "None of the above", "Object-oriented" ],
        correctAnswer: "Object-oriented"
    },
    {
        question: "What is the most common use of JavaScript?",
        choices: [ "Creating web pages", "Creating mobile apps", "Creating desktop apps", "Creating games" ],
        correctAnswer: "Creating web pages"
    },
    {
        question: "What is a function?",
        choices: [ "A container to hold a value", "A block of code that runs when it is called", "A block of code that runs until a condition is met", "A primitive data type" ],
        correctAnswer: "A block of code that runs when it is called"
    },
    {
        question: "What does DOM stand for?",
        choices: [ "Document Orientation Model", "Document Object Modeling", "Document Object Model", "Document Orientation Modeling" ],
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the DOM?",
        choices: [ "A programming language", "A database", "A framework", "An object-oriented representation of an HTML document" ],
        correctAnswer: "An object-oriented representation of an HTML document"
    },
    {
        question: "What is an API?",
        choices: [ "A programming language", "A database", "A set of functions that allow programs to communicate with each other", "A framework" ],
        correctAnswer: "A set of functions that allow programs to communicate with each other"
    },
    {
        question: "What is the difference between const and let?",
        choices: [ "const is used to declare a variable that cannot be changed, and let is used to declare a variable that can be changed", "const is used to declare a variable that can be changed, and let is used to declare a variable that cannot be changed", "const is used to declare a variable that can be changed, and let is used to declare a variable that can be changed", "const is used to declare a variable that cannot be changed, and let is used to declare a variable that cannot be changed" ],
        correctAnswer: "const is used to declare a variable that cannot be changed, and let is used to declare a variable that can be changed"
    },
    {
        question: "What is a string?",
        choices: [ "A primitive data type", "A block of code that runs when it is called", "A block of code that runs until a condition is met", "A container to hold a value" ],
        correctAnswer: "A primitive data type"
    },
    {
        question: "What purpose does a function serve?",
        choices: [ "To store a value", "To run a block of code", "To run a block of code until a condition is met", "To store a block of code" ],
        correctAnswer: "To run a block of code"
    },
    {
        question: "What is a boolean?",
        choices: [ "A primitive data type", "A block of code that runs when it is called", "A block of code that runs until a condition is met", "A container to hold a value" ],
        correctAnswer: "A primitive data type"
    },
    {
        question: "What is a loop?",
        choices: [ "A block of code that runs until a condition is met", "A block of code that runs when it is called", "A container to hold a value", "A primitive data type" ],
        correctAnswer: "A block of code that runs until a condition is met"
    },
    {
        question: "What are the three primitive data types?",
        choices: [ "string, number, object", "string, number, boolean", "string, number, array", "string, number, function" ],
        correctAnswer: "string, number, boolean"
    },
    {
        question: "What is an array?",
        choices: [ "A container to hold a value", "A block of code that runs when it is called", "A container to hold multiple values", "A primitive data type" ],
        correctAnswer: "A container to hold multiple values"
    },
    {
        question: "What does return do and where does it go?",
        choices: [ "It returns a value from a loop", "It returns a value from a variable", "It returns a value from a string", "It returns a value from a function" ],
        correctAnswer: "It returns a value from a function"
    },
    {
        question: "What is a callback function?",
        choices: [ "A function that is passed into another function as an argument", "A function that is called by another function", "A function that is called by a loop", "A function that is called by a variable" ],
        correctAnswer: "A function that is passed into another function as an argument"
    },
    {
        question: "What is a method?",
        choices: [ "A function that is called by another function", "A function that is passed into another function as an argument", "A function that is called by a loop", "A function that is called by an object" ],
        correctAnswer: "A function that is called by an object"
    },
    {
        question: "What is an object?",
        choices: [ "A container to hold a value", "A block of code that runs when it is called", "A collection of properties", "A container to hold multiple values" ],
        correctAnswer: "A collection of properties"
    },
    {
        question: "What is a property?",
        choices: [ "A container to hold a value", "A block of code that runs when it is called", "A container to hold multiple values", "A value that is assigned to an object" ],
        correctAnswer: "A value that is assigned to an object"
    },
    {
        question: "What is a class?",
        choices: [ "A blueprint for creating objects", "A container to hold a value", "A block of code that runs when it is called", "A container to hold multiple values" ],
        correctAnswer: "A blueprint for creating objects"
    }
];

// Global Variables
const startButton = document.getElementById('start-btn');
let questionContainer = document.getElementById('question-text');
let answerContainer = document.getElementById('answers');
let currentScore = document.getElementById('current-score');
const highScores = document.getElementById('high-scores');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const intro = document.getElementById('intro');
const quiz = document.getElementById('quiz');
const scores = document.getElementById('scores');
const gameOver = document.getElementById('game-over');

let timeSeconds = 30;
const interval = 1000;

// call the functions to hide the quiz and high scores containers
hideQuiz();
hideHighScores();
hideGameOver();

// Functions

// Hide the Quiz container
function hideQuiz() {
    quiz.classList.add('hidden');
};

// Hide the High Scores container
function hideHighScores() {
    scores.classList.add('hidden');
}

// Hide the Game Over container
function hideGameOver() {
    gameOver.classList.add('hidden');
}

// Hide the Intro container
function hideIntro() {
    intro.classList.add('hidden');
}

// Begin the question index at 0
let questionIndex = 0;


// Get the first question
function startQuestions () {
    questionContainer.textContent = questions[questionIndex].question;
    answerContainer.innerHTML = '';
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        let answer = document.createElement('button');
        answer.textContent = questions[questionIndex].choices[i];
        answer.setAttribute('class', 'answer');
        answer.addEventListener('click', checkAnswer);
        answerContainer.appendChild(answer);
    }
}

// Callback function for the submit button
function submitHandler (event) {
    event.preventDefault();

    let initials = document.getElementById('initials').value;
    let finalScore = document.getElementById('final-score').textContent;
    finalScore = timeSeconds;

    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    let newScore = {
        initials: initials,
        score: finalScore
    };

    highScores.push(newScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // hide the submit button
    submitButton.classList.add('hidden');
}

// Callback function for the restart button
function restartQuiz (event) {
    event.preventDefault();
    // delete the final score element
    let finalScore = document.getElementById('final-score');
    finalScore.remove();

    // reset the question index
    questionIndex = 0;
    // reset the time
    timeSeconds = 30;
    // reset the score
    currentScore.textContent = 0;
    // hide the high scores container
    hideHighScores();
    // hide the game over container
    hideGameOver();
    // show the intro container
    intro.removeAttribute('class', 'hidden');
};


// End the quiz and show the high scores
function gameEnd () {
    // show the submit button if it is hidden
    submitButton.classList.remove('hidden');
    // create an element to hold the final score
    let finalScore = document.createElement('p');
    // set the text content of the final score element
    finalScore.textContent = timeSeconds;
    // set the id of the final score element
    finalScore.setAttribute('id', 'final-score');
    // append the final score element to the game over container after the h3 element
    gameOver.insertBefore(finalScore, gameOver.children[2]);
    // show the scores container
    scores.removeAttribute('class', 'hidden');
    // show the game over container
    gameOver.removeAttribute('class', 'hidden');

    // get high scores from local storage
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // sort high scores
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
    // display high scores
    let highScoresList = document.getElementById('high-scores-list');
    for (let i = 0; i < highScores.length; i++) {
        let score = document.createElement('li');
        score.textContent = highScores[i].initials + ' - ' + highScores[i].score;
        highScoresList.appendChild(score);
    }

    let initials = document.getElementById('initials');

    // 
    hideQuiz();
}

// Check the answer
function checkAnswer (event) {
    if (event.target.textContent === questions[questionIndex].correctAnswer) {
        // add 10 to the timer
        timeSeconds += 10;
        questionIndex++;
        if (questionIndex < questions.length) {
            startQuestions();
        } else {
            gameEnd();
        }
    } else {
        // remove 10 seconds from the timer
        timeSeconds -= 10;
        questionIndex++;
        if (questionIndex < questions.length) {
            startQuestions();
        } else {
            gameEnd();
        }
    }
}

// Start the timer
function startTimer () {
    let timer = setInterval(function() {
        timeSeconds--;
        currentScore.textContent = timeSeconds;
        if (timeSeconds <= 0) {
            clearInterval(timer);
            gameEnd();
        }
    }, interval);
}

// Start the quiz
function startQuiz () {
    hideIntro();
    quiz.removeAttribute('class', 'hidden');
    startTimer();
    startQuestions();

}

// Event Listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitHandler)
restartButton.addEventListener('click', restartQuiz);