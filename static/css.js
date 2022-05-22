// Declare the UI elements
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')


// This object (app) controls the application.It contain both functions and variables(questions).
var app = {
    questions: [{
            q: 'Which of one is a standard way to show popup in JavaSript? ',
            options: ['alert("cppbuzz")', 'Window.alert("cppbuzz")', 'alert.window("cppbuzz")', 'window("cppbuzz")'],
            answer: 1
        },
        {
            q: 'Is Python case sensitive when dealing with identifiers?',
            options: ['Yes', 'No', 'machine dependent', 'none of the mentioned'],
            answer: 1
        },
        {
            q: 'What is absolute value of positive infinity?',
            options: ['undefined', 'infinity', '0', 'negative infinity'],
            answer: 2
        },
        {
            q: 'In which decade was the American Institute of Electrical Engineers(AIEE) founded ? ',
            options: ['1890s', '1870s', '1950s', '1880s'],
            answer: 3
        },
        {
            q: 'What is part of a database that holds only one type of information ? ',
            options: ['File', 'Report', 'Field', 'Record'],
            answer: 3
        },
    ],

    index: 0, // Counter that counts particular quiz number

    // This function takes the index and select the question of that index and load it up unto the UI element together with the options
    load: function() {
        if (this.index <= this.questions.length - 1) {
            quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
            opt1.innerHTML = this.questions[this.index].options[0];
            opt2.innerHTML = this.questions[this.index].options[1];
            opt3.innerHTML = this.questions[this.index].options[2];
            opt4.innerHTML = this.questions[this.index].options[3];
        } else {
            quizbox.innerHTML = "Quiz Completed!";
            ul.style.display = "none";
            nextButton.style.display = "none";
        }
    },

    // This function increase the index and load the corresponding question again
    next: function() {
        this.index++;
        this.load();
    },

    // This function check when a user get the answer or not
    check: function(ele) {
        var id = ele.id.split('');
        if (id[id.length - 1] == this.questions[this.index].answer) {
            this.score++;
            ele.className = "correct";
            this.scoreCard();
        } else {
            ele.className = "wrong";
        }
    },

    // This will prevent a user to click to another option after he must have selected an option
    preventClick: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },

    // This will do the reverse of preventClick
    allowClick: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = ''
        }
    },

    score: 0, // Initial score

    // The function scoreCard displays user's score at the lower part of the window.
    scoreCard: function() {
        scoreCard.innerHTML = this.score + "/" + this.questions.length;
    }
}

window.load = app.load();

function button(ele) {
    app.check(ele);
    app.preventClick();
}

function next() {
    app.next();
    app.allowClick();
}