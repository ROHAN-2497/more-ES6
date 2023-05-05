const student ={
    name : 'kolim uddin',
    age : 15,
    roll : 2,
    class : 'ten',
    marks : {
        phsysics : 80,
        math : 89,
        chemistry : 68
}
}


const marks = student.marks;
const math = student.marks.math;

const chemistry = student ['marks'] ['chemistry']
const subject = 'math';
const subjectMarks = student.marks[subject]
console.log(subjectMarks);
console.log(chemistry);