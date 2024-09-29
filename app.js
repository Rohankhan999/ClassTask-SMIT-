// // CLASS_TASK//

  //task 01//
// var str = prompt("Enter a sentence:"); 
// var words = str.split(" ");
// var capital = []; 

// for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//      var capital = word.charAt(0).toUpperCase() + word.slice(1);
//     capital.push(capital); 
// }

// var result = capitalizedWords.join(" "); 
// console.log(result); 




// task02//

// var letters = "Saylani mass it Traning";
// for (var i = 0; i < letters.length; i++) { 
//     if (letters.slice(i, i + 7) === "Saylani") { 
//         document.write("<h1>" + "found!" + "</h1>");
//         break; 
//     }
// }


// task03//




var text = "hello i am saylani mass it training student";
var firstChar = text.indexOf("saylani");

if (firstChar !== -1) {
    document.write("Found Saylani");
} else {
    document.write("Saylani not found");
}


//TASK 04 //

// var text = " hello i'm a student of saylani malir campus karachi ";
// var word = text.replace("saylani","SMIT");
// console.log(word);