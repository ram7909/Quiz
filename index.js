let quizData = [
    {
        ques: "Q.1 Javascript is an _______ language?",
        option: [
            { text: "Object-Oriented", iscorrect: true },
            { text: "Object-Based", iscorrect: false },
            { text: "Procedural", iscorrect: false },
            { text: "None of the above", iscorrect: false },
        ]
    },
    {
        ques: "Q.2 Which of the following keywords is used to define a variable in Javascript?",
        option: [
            { text: "var", iscorrect: false },
            { text: "let", iscorrect: false },
            { text: "Both A and B", iscorrect: true },
            { text: "None of the above", iscorrect: false },
        ]
    },
    {
        ques: "Q.3 Which of the following methods is used to access HTML elements using Javascript?",
        option: [
            { text: "getElementbyId()", iscorrect: false },
            { text: "getElementByClassName()", iscorrect: false },
            { text: "Both A and B", iscorrect: true },
            { text: "None of the above", iscorrect: false },
        ]
    }, {
        ques: "Q.4 Which of the following methods can be used to display data in some form using Javascript?",
        option: [
            { text: "document.write()", iscorrect: false },
            { text: "console.log()", iscorrect: false },
            { text: "window.alert()", iscorrect: false },
            { text: "All of the above", iscorrect: true },
        ]
    },
    {
        ques: "Q.5 How can a datatype be declared to be a constant type?",
        option: [
            { text: "const", iscorrect: true },
            { text: "var", iscorrect: false },
            { text: "let", iscorrect: false },
            { text: "constant", iscorrect: false },
        ]
    },
]
let options = document.querySelectorAll('.opt');
let output = document.querySelector("h5")
let score = 0;
let questionIndex = 0;
let answer = false;
const nextQuestion = () => {
    if (questionIndex < quizData.length - 1) {
        questionIndex++;
        displayQuestion(questionIndex);
        answer = false;
        options.forEach(option =>{
            option.disabled = false;
        })
    }
    else {
        let result = document.querySelector('.submit');
        result.innerHTML = "Show Result";
        result.addEventListener('click',()=>{
            output.innerText = `Score: ${score} / 5`
        })
    }
}
const displayQuestion = (nxt) => {
    document.querySelector('#question').innerHTML = quizData[nxt].ques
    document.querySelector('#a').innerHTML = quizData[nxt].option[0].text
    document.querySelector('#b').innerHTML = quizData[nxt].option[1].text
    document.querySelector('#c').innerHTML = quizData[nxt].option[2].text
    document.querySelector('#d').innerHTML = quizData[nxt].option[3].text
    
    options.forEach(btn=>{
        btn.addEventListener('click',(button)=>{
            if(!answer){
                for(let i=0;i<quizData[nxt].option.length;i++){
                    if(button.target.innerText == quizData[nxt].option[i].text){
                        if(quizData[nxt].option[i].iscorrect == true){
                            score++;
                        }
                        answer = true;
                        button.target.disabled = true;
                        // console.log(button.target.innerText);
                        document.querySelector('.submit').addEventListener('click',nextQuestion);
                    }
                }

            }
        })
    })
}
displayQuestion(questionIndex)
