// // CLASS_TASK//

// // var str = "hello!"
// // var str1 = "world!"
// // var task = str.slice(0,1).toUpperCase() + str.slice(1);
// // var task2 = str1.slice(0,1).toUpperCase() + str1.slice(1)
// // console.log(task, task2);

// // task02//

var letters = "saylani mass it Traning";
for (var i = 0; letters.length; i++) {
    if (letters.slice(i, i + 7) === "Traning"); {
        document.write("<h1>"+ "found!" + "</h1>");
        break; 
    }
}
