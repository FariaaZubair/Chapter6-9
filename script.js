// var a=10;
// document.write(`The value of a is: ${a}<br/>`);
// document.write(`The value of ++a is: ${++a}<br/> Now the value of a is: ${a} <br/>`);
// document.write(`The value of a++ is: ${a++}<br/>Now the value of a is: ${a}<br/>`);
// document.write(`The value of --a is: ${--a}<br/>Now the value of a is: ${a}<br/>`);
// document.write(`The value of a-- is: ${a--}<br/>Now the value of a is: ${a}<br/>`);
// 
// document.write("<h2>Part 2</h2>");
// var a=2;
// var b=1;
// document.write(`a is ${a} <br/>`);
// document.write(`b is ${b} <br/>`);
// var preDecrement = --a;
// var subtract= --a - --b;
// var add = --a - --b + ++b;
// var result= --a - --b + ++b + b--;
// document.write(`Result is ${result}`);
// 
// document.write("<h2>Part 3</h2>");
// var userName = prompt("Enter your name");
// document.write(`Hey ${userName}, good to see you again!`);
// 
// 
// document.write("<h2>Part 4</h2>");
// var no= prompt("Enter a number you want to see table of")
// document.write(`${no} x 1 = ${no} <br/>`);
// document.write(`${no} x 2 = ${no*2} <br/>`);
// document.write(`${no} x 3 = ${no*3} <br/>`);
// document.write(`${no} x 4 = ${no*4} <br/>`);
// document.write(`${no} x 5 = ${no*5} <br/>`);
// document.write(`${no} x 6 = ${no*6} <br/>`);
// document.write(`${no} x 7 = ${no*7} <br/>`);
// document.write(`${no} x 8 = ${no*8} <br/>`);
// document.write(`${no} x 9 = ${no*9} <br/>`);
// document.write(`${no} x 10 = ${no*10} <br/>`);

document.write("<h2>Part 5</h2>");
var firstSubject=prompt("Enter 1st Subject name");
var secondSubject=prompt("Enter 2nd Subject name");
var thirdSubject=prompt("Enter 3rd Subject name");
var totalMarks=100;
var firstSubjectObtainedMarks= prompt("Enter marks of 1st subject");
var secondSubjectObtainedMarks= prompt("Enter marks of 2nd subject");
var thirdSubjectObtainedMarks= prompt("Enter marks of 3rd subject");
var firstPer= (firstSubjectObtainedMarks/totalMarks)*100;
var secondPer= (secondSubjectObtainedMarks/totalMarks)*100;
var thirdPer= (thirdSubjectObtainedMarks/totalMarks)*100;
document.write(`
    <table>
        <tr>
            <th>Subjects</th>
            <th>Total marks</th>
            <th>Obtained marks</th>
            <th>Percentage</th>
        </tr>
          <tr>
        <td>${firstSubject}</td>
        <td>${totalMarks}</td>
        <td>${firstSubjectObtainedMarks}</td>
        <td>${firstPer}%</td>
        
          </tr>
            <tr>
            <td>${secondSubject}</td>
            <td>${totalMarks}</td>
            <td>${secondSubjectObtainedMarks}</td>
            <td>${secondPer}%</td>
          
            </tr>
              <tr>
              <td>${thirdSubject}</td>
              <td>${totalMarks}</td>
              <td>${thirdSubjectObtainedMarks}</td>
              <td>${thirdPer}%</td>
              </tr>
              <tr>
              <td colspan="1">${totalMarks+totalMarks+totalMarks}</td>
                <td>${firstSubjectObtainedMarks+secondSubjectObtainedMarks+thirdSubjectObtainedMarks}<td/>
                <td>${firstPer+secondPer+thirdPer}</td>
              </tr>
    </table>
`);




