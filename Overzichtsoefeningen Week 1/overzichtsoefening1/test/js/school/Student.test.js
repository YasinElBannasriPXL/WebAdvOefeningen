import Course from '../../../src/js/school/Course';
import Student from '../../../src/js/school/Student';
// naam: Yasin El Bannasri

test('throws on 0 completed courses', () => {
    expect(() => {
        let student = new Student(423);
        student.calculateGrade();

    }).toThrow();
})