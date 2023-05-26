//your JS code here. If required.
var questions = [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d"
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b"
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a"
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b"
            }
        ];

        var currentQuestion = 0;
        var score = 0;

        function showQuestion() {
            var quiz = document.getElementById("quiz");
            var question = document.getElementById("question");
            var optionA = document.getElementById("a_text");
            var optionB = document.getElementById("b_text");
            var optionC = document.getElementById("c_text");
            var optionD = document.getElementById("d_text");

            var current = questions[currentQuestion];
            question.textContent = current.question;
            optionA.textContent = current.a;
            optionB.textContent = current.b;
            optionC.textContent = current.c;
            optionD.textContent = current.d;
        }

        function checkAnswer() {
            var options = document.getElementsByName("option");
            var selectedOption = null;

            for (var i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selectedOption = options[i].id;
                    break;
                }
            }

            if (selectedOption === questions[currentQuestion].correct) {
                score++;
            }

            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            var quiz = document.getElementById("quiz");
            quiz.innerHTML = "<h2>Quiz Result</h2>";
            quiz.innerHTML += "<p>Your score: " + score + " out of " + questions.length + "</p>";
            quiz.innerHTML += "<button onclick='location.reload()'>Restart Quiz</button>";
        }

        document.getElementById("submit").addEventListener("click", checkAnswer);

        showQuestion();