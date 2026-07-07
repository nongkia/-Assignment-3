export {};
enum CourseStatus {
  Open = "Open",
  Closed = "Closed",
  Full = "Full"
}

interface Student {
  name: string;
  id: number;
}

interface Course {
  title: string;
  code: string;
  status: CourseStatus;
  students: Student[];
}


function enroll(student: Student, course: Course): void {
  if (course.status === CourseStatus.Open) {
    course.students.push(student);
    console.log(`Successfully enrolled ${student.name} in ${course.title}.`);
  } else {
    console.log(`Enrollment failed: ${course.title} is currently ${course.status}.`);
  }
}

const studentA: Student = { name: "Alice", id: 101 };
const studentB: Student = { name: "Bob", id: 102 };

const introToTS: Course = {
  title: "Introduction to TypeScript",
  code: "CS-101",
  status: CourseStatus.Open,
  students: []
};

enroll(studentA, introToTS);

introToTS.status = CourseStatus.Full;

enroll(studentB, introToTS);