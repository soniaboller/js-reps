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
    return string.split('').reverse().join('');
}
console.log(letterReverse(sentence)); //how do you remove the commas?


// ROUND SIX
var wordLength = 0;
var wordArray1 = ["oh", "good", "grief"];
var wordArray2 = ["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"];
function findLongestWord(wordArray){
    for (var i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > wordLength) {
            wordLength = wordArray[i].length;
            var longestWord = wordArray[i];
        }
    }
    console.log(longestWord);
}
findLongestWord(wordArray1);
findLongestWord(wordArray2);


// FINAL ROUND -- take string input and apply function, then add " proves that I am the rep MASTER!" on the end

function repMaster(str, func){
    if (func === wordReverse){
        return wordReverse(str).concat("proves that I am the rep MASTER!").join(' ');
    }
    else if (func === letterReverse){
        return letterReverse(str).concat("proves that I am the rep MASTER!").join(' ');
    }
    else {
        console.log("pick a valid function");
    }
}
console.log(repMaster("Never give your heart to a blockhead", wordReverse), 'this is repMaster with wordReverse');
console.log(repMaster("I finished this practice", letterReverse), 'this is repMaster with letterReverse'); // this used to work but doesn't now?
//also still have no idea how to make a function to
