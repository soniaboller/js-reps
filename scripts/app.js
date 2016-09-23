window.console.log("loaded");

// ROUND ONE
var words = ["hello", "what", "is", "the", "best", "fkdsafjoiwejfkls"];
var lengthOfArrayString = [];

function lengths(arrayOfStrings) {
    for (var i = 0; i <arrayOfStrings.length; i++){
        lengthOfArrayString.push(arrayOfStrings[i].length);
    }
    return lengthOfArrayString;
}
lengths(words);
console.log(lengthOfArrayString);

// ROUND TWO
function transmogrifier(a, b, c) {
    var multiplied = a * b;
    var transmogrified = Math.pow(multiplied, c)
    return transmogrified;
}

console.log(transmogrifier(5, 3, 2));
console.log(transmogrifier(5, 4, 3));
console.log(transmogrifier(13, 12, 5));
console.log(transmogrifier(42, 13, 7));

// ROUND THREE

function toonify(accent, sentence) {
    if (accent.toLowerCase() === "daffy") {
        return sentence.replace(/s/g, 'th');
    }
    else if (accent.toLowerCase() === "elmer"){
        return sentence.replace(/r/g, 'w');
    }
    else if (accent.toLowerCase() === "dracula"){
        return sentence.replace(/w/g, 'v');
    }
    else {
        return sentence;
    }

}
console.log(toonify("daffy", "so you smell like sausage"));
console.log(toonify("elmer", "Be very very quiet, I'm hunting rabbits!"));
console.log(toonify("dracula", "I want to suck your blood"));
console.log(toonify("poop", "I like to poop"));

// ROUND FOUR

var sentence = "Now I know what a TV dinner feels like";

function wordReverse(string){
    var splitSentence = string.split(" ");
    return splitSentence.reverse();

}
console.log(wordReverse(sentence));

// ROUND FIVE

function letterReverse(string) {
    return string.split('').reverse().join();
}
console.log(letterReverse(sentence)); //how do you remove the commas?

