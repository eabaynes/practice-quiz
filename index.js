// test questions and answers
const questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "A programming language", correct: true },
            { text: "A database", correct: false },
            { text: "A framework", correct: false },
            { text: "A library", correct: false }
        ]
    },
    {
        question: "What kind of language is JavaScript?",
        answers: [
            { text: "Functional", correct: false },
            { text: "Procedural", correct: false },
            { text: "None of the above", correct: false },
            { text: "Object-oriented", correct: true }
        ]
    },
    {
        question: "What is the most common use of JavaScript?",
        answers: [
            { text: "Creating web pages", correct: true },
            { text: "Creating mobile apps", correct: false },
            { text: "Creating desktop apps", correct: false },
            { text: "Creating games", correct: false }
        ]
    },
    {
        question: "What is a function?",
        answers: [
            { text: "A container to hold a value", correct: false },
            { text: "A block of code that runs when it is called", correct: true },
            { text: "A block of code that runs until a condition is met", correct: false },
            { text: "A primitive data type", correct: false }
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "Document Orientation Model", correct: false },
            { text: "Document Object Modeling", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Document Orientation Modeling", correct: false }
        ]
    },
    {
        question: "What is the DOM?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A database", correct: false },
            { text: "A framework", correct: false },
            { text: "An object-oriented representation of an HTML document", correct: true }
        ]
    },
    {
        question: "What is an API?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A database", correct: false },
            { text: "A set of functions that allow programs to communicate with each other", correct: true },
            { text: "A framework", correct: false }
        ]
    },
    {
        question: "What is the difference between const and let?",
        answers: [
            { text: "const is used to declare a variable that cannot be changed, and let is used to declare a variable that can be changed", correct: true },
            { text: "const is used to declare a variable that can be changed, and let is used to declare a variable that cannot be changed", correct: false },
            { text: "const is used to declare a variable that can be changed, and let is used to declare a variable that can be changed", correct: false },
            { text: "const is used to declare a variable that cannot be changed, and let is used to declare a variable that cannot be changed", correct: false }
        ]
    },
    {
        question: "What is a string?",
        answers: [
            { text: "A primitive data type", correct: true },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A block of code that runs until a condition is met", correct: false },
            { text: "A container to hold a value", correct: false }
        ]
    },
    {
        question: "What purpose does a function serve?",
        answers: [
            { text: "To store a value", correct: false },
            { text: "To run a block of code", correct: true },
            { text: "To run a block of code until a condition is met", correct: false },
            { text: "To store a block of code", correct: false }
        ]
    },
    {
        question: "What is a boolean?",
        answers: [
            { text: "A primitive data type", correct: true },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A block of code that runs until a condition is met", correct: false },
            { text: "A container to hold a value", correct: false }
        ]
    },
    {
        question: "What is a loop?",
        answers: [
            { text: "A block of code that runs until a condition is met", correct: true },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A container to hold a value", correct: false },
            { text: "A primitive data type", correct: false }
        ]
    },
    {
        question: "What are the three primitive data types?",
        answers: [
            { text: "string, number, object", correct: false },
            { text: "string, number, boolean", correct: true },
            { text: "string, number, array", correct: false },
            { text: "string, number, function", correct: false }
        ]
    },
    {
        question: "What is an array?",
        answers: [
            { text: "A container to hold a value", correct: false },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A container to hold multiple values", correct: true },
            { text: "A primitive data type", correct: false }
        ]
    },
    {
        question: "What does return do and where does it go?",
        answers: [
            { text: "It returns a value from a loop", correct: false },
            { text: "It returns a value from a variable", correct: false },
            { text: "It returns a value from a string", correct: false },
            { text: "It returns a value from a function", correct: true }
        ]
    },
    {
        question: "What is a callback function?",
        answers: [
            { text: "A function that is passed into another function as an argument", correct: true },
            { text: "A function that is called by another function", correct: false },
            { text: "A function that is called by a loop", correct: false },
            { text: "A function that is called by a variable", correct: false }
        ]
    },
    {
        question: "What is a method?",
        answers: [
            { text: "A function that is called by another function", correct: false },
            { text: "A function that is passed into another function as an argument", correct: false },
            { text: "A function that is called by a loop", correct: false },
            { text: "A function that is called by an object", correct: true }
        ]
    },
    {
        question: "What is an object?",
        answers: [
            { text: "A container to hold a value", correct: false },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A collection of properties", correct: true },
            { text: "A container to hold multiple values", correct: false }
        ]
    },
    {
        question: "What is a property?",
        answers: [
            { text: "A container to hold a value", correct: false },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A container to hold multiple values", correct: false },
            { text: "A value that is assigned to an object", correct: true }
        ]
    },
    {
        question: "What is a class?",
        answers: [
            { text: "A blueprint for creating objects", correct: true },
            { text: "A container to hold a value", correct: false },
            { text: "A block of code that runs when it is called", correct: false },
            { text: "A container to hold multiple values", correct: false }
        ]
    }
];

// get the question container
const questionContainer = document.getElementById("question-text")

// get the button to start the quiz
const startButton = document.getElementById("start");

// get all the answer buttons
const answerButtons = document.getElementsByClassName("answer-btn");

// get the container for the final score
const finalScoreContainer = document.getElementById("score");

// get the restart button
const restartButton = document.getElementById("restart");

// high scores container
const highScores = document.getElementById("high-scores");

// get the timer element
const timer = document.getElementById("timer");

// get the score element
const score = document.getElementById("score");

// add event listener to the start button
startButton.addEventListener("click", startQuiz);

// add event listener to the restart button
restartButton.addEventListener("click", restartQuiz);

// function to end the quiz
function endQuiz () {
    // empty the question container
    questionContainer.innerHTML = "";
    // empty the answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerHTML = "";
    }
    // prompt the user to enter their initials
    const initials = prompt("Enter your initials");
    // get the final score
    const finalScore = timer + score;

    // create a new object to store the initials and score
    const newScore = {
        initials: initials,
        score: finalScore
    }

    // add the new score to the high score ul as an li
    const newScoreLi = document.createElement("li");
    newScoreLi.textContent = newScore.initials + " - " + newScore.score;
    highScores.appendChild(newScoreLi);
};

// funtion to start the timer
function startTimer () {
    // set the time to 120 seconds
    let timeLeft = 120;

    // set the timer to count down every second
    const timer = setInterval(function() {
        // if the time is greater than 0
        if (timeLeft > 0) {
            // decrement the time
            timeLeft--;
            // display the time
            document.getElementById("timer").innerHTML = timeLeft;
        } else {
            // stop the timer
            clearInterval(timer);
            // run the end quiz function
            endQuiz();
        }
    });
};

// function to display the question
function displayQuestion () {
    // get the current question
    const currentQuestion = questions[currentQuestion];
    // display the current question
    questionContainer.textContent = currentQuestion.question;
    // loop through the current questions answers
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        // set the answer buttons text to the current answer
        answerButtons[i].textContent = currentQuestion.answers[i].text;
        // set the data correct attribute to the current answer
        answerButtons[i].setAttribute("data-correct", currentQuestion.answers[i].correct);
    }
};

// function to handle the answer buttons
function answerButtonClick () {
    // if the answer is correct
    if (this.getAttribute("data-correct") === "true") {
        // add 10 to the score
        score += 10;
        // if the answer is incorrect
    } else {
        // subtract 10 from the time
        timeLeft -= 10;
    }

    // increment the current question
    currentQuestion++;
    // if the current question is less than the length of the questions array
    if (currentQuestion < questions.length) {
        // run the display question function
        displayQuestion();
        // if the current question is greater than or equal to the length of the questions array
    } else {
        // run the end quiz function
        endQuiz();
    }
}

// function to start the quiz
function startQuiz () {
    // start the timer
    startTimer();
    // set the current question to 0
    let currentQuestion = 0;
    // set the score to 0
    let score = 0;

    // run the display question function
    displayQuestion();
    // loop through the answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        // add event listener to the answer buttons
        answerButtons[i].addEventListener("click", answerButtonClick);
    }
};


// function to restart the quiz
function restartQuiz () {
    // clear the score from the score element
    score.innerHTML = "";
    // clear the timer from the timer element
    timer.innerHTML = "";

    // run the start quiz function
    startQuiz();
}