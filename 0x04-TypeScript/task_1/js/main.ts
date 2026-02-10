// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for printTeacher function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// printTeacher function
const printTeacher: printTeacherFunction = (teacher) => {
  return `${teacher.firstName.charAt(0)} ${teacher.lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));
