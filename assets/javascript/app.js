$("#start-button").on("click",function() {
    console.log("GAME HAS STARTED")
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    question: "What is your name",
    answers: ["Tyler", "superman", "johnnyboy"],
    correctAnswer: ["1"]
}, {
    question: "What is your age",
    answers: ["21", "22", "24", "25"],
    correctAnswer: 3
}, {
    question: "What is your hometown",
    answers: ["ATL", "CHicago", "BHAM"],
    correctAnswer: [2]
}, {
    question: "What is your occupation",
    answers: ["accountant", "janitor", "chef", "astronaut"],
    correctAnswer: "chef"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("TIME IS UP!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#game").prepend("<h2>TIME REMAINING: <span id='counter'>120</span> Seconds</h2>");
        $("#start-button").remove();
        for(var a=0;a<questions.length;a++){
            $("#game").append("<h3>"+questions[a].question+"</h3>");
            for(var b=0;b<questions.length;b++)(
                $("#game").append("<input type='radio' name='question-"+a+"' value='"+questions[a].answers[b]+" '>"+questions[a].answers[b])
            )
        }
        $("#game").append('<br><button id= "end">DONE</button>');

    },
    done: function(){
        $.each($('input[name="question-0"]:checked'),function(){
            if($(this).val() == questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'),function(){
            if($(this).val() == questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $("#game h2").remove();

        $("#game").html("<h2>Finished!</h2>");
        $("#game").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#game").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#game").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");

    }
}