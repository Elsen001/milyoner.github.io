
var btnStart= document.querySelector("#startGame");
var start= document.querySelector("#start");
var ques= document.querySelector(".question");
var ans= document.querySelector(".answer");
var cardbody= document.querySelector(".card-body");
var newgame= document.querySelector("#newgame");
var endGame= document.querySelector("#endGame");



btnStart.addEventListener("click",load)

function load () { 
    ques.style.display="block"
    ans.style.display="block"
    btnStart.style.display="none"

    function Question (text,choices,answer) { 
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    
     }
    
     Question.prototype.checkAnswer = function(answer){
        return this.answer === answer;
    }
    
    function Quiz(questions){
        this.questions = questions;
        this.score = 0;
        this.total=500;
        this.index = 0;
        this.reset=0;
    }
    
    // Quiz Prototype
    Quiz.prototype.getQuestion = function(){
        return this.questions[this.index];
    }

    
    // Quiz isFinish
    Quiz.prototype.isFinish = function(){
        return this.questions.length === this.index;
    }
    
    // Quiz guess
    Quiz.prototype.guess = function(answer){
        var question = this.getQuestion();
    
        if(question.checkAnswer(answer)){
            this.score += this.total;
        }
        this.index++;
    }
    
     var q1 = new Question("Bəzi aylar 30, bəziləri 31 ; neçə ayda 28 gün vardır?",["1","2","3","Hamısında"],"Hamısında");
     var q2 = new Question("Həkiminiz sizə 3 həb verər və bunları yarımşar saat arayla götürmənizi tövsiyə etsə, dərmanların hamısını bitirməniz nə qədər sürər?",["Bir saat","iki saat","uc saat","dort saat"],"Bir saat");
     var q3 = new Question("30′ u yarıma bölüb 10 əlavə etdiniz, neçə etdi?",["40 edər","30 edər","60 edər","70 edər"],"70 edər");
     var q4 = new Question("Bir cütçünün 17 qoyunu vardı. Sürüdə epidemiya xəstəlik oldu, doqquzu ağır xəstələndi, digərləri öldü. Cütçünün neçə qoyunu var?",["6 canlı qoyun","5 canlı qoyun","8 canlı qoyun","9 canlı qoyun"],"9 canlı qoyun");
     var q5 = new Question("3 alma vardı ikisini götürdüm. neçə almam var?",["1 alma","3 alma","4 alma","2 alma"],"2 alma");
    
     var questions = [q1,q2,q3,q4,q5];
    
    
     var quiz = new Quiz(questions);
    
    
     loadQuestion();

     
     
     function loadQuestion(){
         if(quiz.isFinish()){
             cardbody.style.display="block"
             newgame.style.display="block"
             showScore();
             endGame.addEventListener("click",reload)
               function reload () { 
                load()
                cardbody.style.display="none"
                             
              }

         }else{
     
             var question = quiz.getQuestion();
             var choices = question.choices;
             
             document.querySelector('.question').textContent = question.text;
     
             for(var i=0; i<choices.length;i++){
                 var element = document.querySelector('#choice'+i);
                 element.innerHTML = choices[i];
                 guess('btn'+i,choices[i]);
             }
     
         }
     }
    
     function guess(id,guess){
        var btn = document.getElementById(id);
        btn.onclick = function(){
            
            quiz.guess(guess);
           
            loadQuestion()
            
        }
    }
    
    function showScore(){
       var html = `<h2>Qazandiginiz Mebleg</h2><h4>${quiz.score} AZN  </h4>`;
    
       document.querySelector('.card-body').innerHTML = html;
    }

}



