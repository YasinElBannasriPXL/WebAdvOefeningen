import Course from '../../../src/js/school/Course';
import Student from '../../../src/js/school/Student';
// naam: Yasin El Bannasri

test('throws on 0 completed courses', () => {
    expect(() => {
        let student = new Student(423);
        student.calculateGrade();

    }).toThrow();
})

test('return 12 on 1 completed course with grade 12', () => {
    let student = new Student(423);
    let course = new Course(1);
    student.addCourse(course);
    course.grade = 12;
    expect(student.calculateGrade()).toBe(12);
})