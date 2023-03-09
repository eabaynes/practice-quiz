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

// function to get 10 random questions from the questions array
function getRandomQuestions() {
    // create a new array to hold the random questions
    let randomQuestions= [];

    // loop through the questions array and get 10 random questions
    for (let i = 0; i < 10; i++) {
        // get a random number between 0 and the length of the questions array
        let randomIndex = Math.floor(Math.random() * questions.length);
        // add the random question to the randomQuestions array
        randomQuestions.push(questions[randomIndex]);
    }

    // make sure there are no duplicate questions and remove them if they are
    for (let i = 0; i < randomQuestions.length; i++) {
        for (let j = i + 1; j < randomQuestions.length; j++) {
            if (randomQuestions[i].question === randomQuestions[j].question) {
                randomQuestions.splice(j, 1);
            }
        }
    }

    // run through the function again if there are less than 10 questions
    if (randomQuestions.length < 10) {
        getRandomQuestions();
    }

    // return the random questions
    return randomQuestions;
}

// function to end the quiz early
function endQuiz() {
    // clear the question container
    questionContainer.innerHTML = "";
    // clear the answer buttons
    answerButtons.innerHTML = "";
    // pop up a message to tell the user the quiz is over and get initials
    const initials = prompt("Quiz over! Enter your initials to save your score.");
    // create a list item and append it to the high scores list
    const highScore = document.createElement("li");
    highScore.textContent = initials + " - " + score;
    highScores.appendChild(highScore);
}

// function to start the timer
function startTimer() {
    // set the time to 120 seconds
    time = 120;

    // set the timer to 1 second intervals
    timer = setInterval(function() {
        // decrease the time by 1 second
        time--;

        // get the timer element
        const timerElement = document.getElementById("timer");

        // set the timer element to the time
        timerElement.textContent = time;

        // if the time is 0, stop the timer and end the quiz
        if (time === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// function to start the quiz
function startQuiz() {
    // hide the start button
    startButton.classList.add("hide");

    // start a two minute timer
    startTimer();

    // set the score to 0
    score = 0;

    // call the random questions function
    randomQuestions = getRandomQuestions();

    // set the current question to index 0 of the random questions array
    currentQuestion = randomQuestions[0];

    // get the question text
    const questionText = currentQuestion.question;

    // get the answer texts
    const answerTexts = currentQuestion.answers;

    // set the question text
    questionContainer.textContent = questionText;

    // loop through the answer buttons and set the text
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = answerTexts[i].text;
    }

    // add an event listener to each button
    answerButtons.forEach(button => {
        button.addEventListener("click", selectAnswer);
    });
}


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

const highScores = document.getElementById("high-scores");

// add event listener to the start button
startButton.addEventListener("click", startQuiz);

// add event listener to the restart button
restartButton.addEventListener("click", restartQuiz);

// add event listener to the answer buttons
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", selectAnswer);
};