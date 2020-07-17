<html>
<title>Grading Marks Program using conditional</title>
<body>
var students[n];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

document.write("enter the marks");
console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 40){
          console.log("Marks are"+Avgmarks+"Grade is C");      
          } 
         else if (avg < 60) {
                console.log("Marks are"+Avgmarks+"Grade is B");
        } else if (avg < 100) {
                console.log("Marks are"+Avgmarks+"Grade is A"); 
}</body>
</html>