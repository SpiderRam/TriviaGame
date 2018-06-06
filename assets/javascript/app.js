const questions = [
    {
        question: "1. Which species of viburnum is known for its fragrance?",
        answers: ['V. carlesii','V. dentatum','V. tinus','V. opulus'],
        correctAnswer: "V. carlesii"
    },
    {
        question: "2. Rose rosette virus is primarily spread by which of the following:",
        answers: ['Bees', 'Wind', 'Mites', 'Soil'],
        correctAnswer: "Mites"
    },
    {
        question: "3. Plants that are cold hardy are known as:",
        answers: ['Annuals', 'Perennials', 'Tropicals', 'Ephemerals'],
        correctAnswer: "Perennials"
    },
    {
        question: "4. Oak trees are classified as which genus:",
        answers: ['Acer', 'Juglans', 'Fraxinus', 'Quercus'],
        correctAnswer: "Quercus"
    },
    {
        question: "5. Mayapple has which of the following medicinal properties:",
        answers: ['Emetic', 'Diuretic', 'Antihistamine', 'Hallucinogenic'],
        correctAnswer: "Emetic"
    },
    {
        question: "6. Metasequoia glyptostroboides is an example of which of the following:",
        answers: ['Evergreen', 'Living Fossil', 'Edible', 'Dioecious'],
        correctAnswer: "Living Fossil"
    },
    {
        question: "7. Which of the following are considered invasive plants?",
        answers: ['Hydrangea, Azalea, Rhododendron', 'Rhus, Rhamnus, Rhaphiolepis', 'Autumn Olive, Barberry, Cleveland Pear', 'Mertensia, Trillium, Erythronium'],
        correctAnswer: 'Autumn Olive, Barberry, Cleveland Pear'
    },
    {
        question: "8. Which of the following terms indicates the color yellow?",
        answers: ['Luteus', 'Caeruleus', 'Niveus', 'Cupreus'],
        correctAnswer: "Luteus"
    },
    {
        question: "9. What is the substance that makes poison ivy dangerous?",
        answers: ['Imidacloprid', 'Urushiol', 'Glyphosate', 'Ayahuasca'],
        correctAnswer: "Urushiol"
    },
    {
        question: "10. Mycorrhizae are symbiotic fungal associations unique to which part of the plant?",
        answers: ['Leaves', 'Stems', 'Flowers', 'Roots'],
        correctAnswer: "Roots"
    },
    {
        question: "11. Gladiolus are grown from which of the following:",
        answers: ['Bulbs', 'Seeds', 'Tubers', 'Corms'],
        correctAnswer: "Corms"
    },
    {
        question: "12. Which of the following terms indicates a columnar plant?",
        answers: ['Radicans', 'Prostrata', 'Fastigiata', 'Sinensis'],
        correctAnswer: "Fastigiata"
    }
]



var counter = 120;
var numberCorrect = 0;
var numberWrong = 0;
var numberUnanswered = 0;

var timer; 

function getAnswers() {
   //try a for loop, with question-[i]
    $.each($("input[name='question-0']:checked"), function(){
        if($(this).val() === questions[0].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };
    })
    $.each($("input[name='question-1']:checked"), function(){
        if($(this).val() === questions[1].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };
    });
    $.each($("input[name='question-2']:checked"), function(){
        if($(this).val() === questions[2].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };
    });
    $.each($("input[name='question-3']:checked"), function(){
        if($(this).val() === questions[3].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };

    });
    $.each($("input[name='question-4']:checked"), function(){
        if($(this).val() === questions[4].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };

    });
    $.each($("input[name='question-5']:checked"), function(){
        if($(this).val() === questions[5].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };

    });
    $.each($("input[name='question-6']:checked"), function(){
        if($(this).val() === questions[6].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };

    });
    $.each($("input[name='question-7']:checked"), function(){
        if($(this).val() === questions[7].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };

    });
    $.each($("input[name='question-8']:checked"), function(){
        if($(this).val() === questions[8].correctAnswer){
            numberCorrect++
        } else {
            numberWrong ++;
        };
            
        });
    $.each($("input[name='question-9']:checked"), function(){
        if($(this).val() === questions[9].correctAnswer){
            numberCorrect ++;
        } else {
            numberWrong ++;
        };

        });
    $.each($("input[name='question-10']:checked"), function(){
        if($(this).val() === questions[10].correctAnswer){
            numberCorrect ++;
        } else if($(this).val() !== questions[10].correctAnswer) {
            numberWrong ++;
        } else if ($("input[name='question-10']:not(:checked)")) {
            numberUnanswered ++;
        };

    });
    $.each($("input[name='question-11']:checked"), function(){
        if($(this).val() === questions[11].correctAnswer){
            numberCorrect ++;
        } else if($(this).val() == null) {
            numberUnanswered ++;
        } else {
            numberWrong ++;
        };
        
        
    });
    console.log(numberCorrect);
    console.log(numberWrong);
    console.log(numberUnanswered);
    showResults();
}


function countDown(){
    counter --;
    $("#timer").text("Time remaining: " + counter);
    
    if (counter == 0) {
        clearInterval (timer);
    }
}

function startGame() {
    
    timer = setInterval (countDown, 1000);
    

    document.getElementById("gameBody").style.visibility = "visible";
    
    for (var i = 0; i < questions.length; i++) {
        var idName1 = "question" + i;
        
        
        $("#questions").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            var idName2 = "answer" + j;
            var idNameStrng = idName1 + idName2;
            $("#questions").append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "' id='" + idNameStrng + "' class='answers'>" + questions[i].answers[j]);
        }
    }

}

$("#start").on("click", startGame);
$("#submit").on("click", getAnswers);

var hideContainer = null;
var restoreContainer = null;

function showResults() {
    hideContainer = $("#container").detach();
    $("#container").html(hideContainer);
    $("#resultsBox").append("<p id='tallyHead'>Results:</p><br> <p class='tally'>Correct: " + numberCorrect + "</p><br> <p class='tally'>Incorrect: " + numberWrong + "</p> <br><br> <button id='resetGame'>Play Again!</button>");
}

function resetGame() {
    var counter = 120;
    var numberCorrect = 0;
    var numberWrong = 0;
    var numberUnanswered = 0;
    document.getElementById("gameBody").style.visibility = "hidden";
    restoreContainer = $("#container").attach();
    $("#container").html(restoreContainer);
}


$("#resetGame").on("click", resetGame);




//How to check for unanswered?  Two solutions not working.

//Start over when Play Again! is clicked.

//line breaks in Question 7-- how to get \n into the JS?  Easier to do all of them on separate lines?

//How to style buttons, no CSS will work except left margin


