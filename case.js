const school = 'Raj uk uttara model school';
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());

const subject = 'Bangla';
const book = 'bangla';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('This is the same book');
}
else{
    console.log('This is not the same book');
}

const teacher = '        Mr. Rahman';
const headTeacher = 'Mr. Rahman      ';

if(teacher.trim() === headTeacher.trim()){
    console.log('This is the same teacher');
}
else{    console.log('This is not the same teacher');
}   