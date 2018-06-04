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



let counter = 120;

function countDown(){
    counter --;
    $("#timer").text("Time remaining: " + counter);
    console.log("COUNTER: "+ counter)
    if (counter == 0) {
        clearInterval (timer);
    }
}



function startGame() {
    document.getElementById("contnr").style.visibility = "block";
    setInterval (countDown, 1000);

    for (var i = 0; i < questions.length; i++) {
        $("#questions").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#questions").append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
    }

}

$("#start").on("click", startGame);





// $.each() in jQuery - check your user values using the name property
// 