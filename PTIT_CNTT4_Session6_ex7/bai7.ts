class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}

let allStudents: Student[] = [];

class Classroom {
    private students: Student[] = [];

    constructor(public className: string) { }

    public showStudents(): void {
        console.log(`Danh sách học sinh lớp ${this.className}:`);
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()} - Name: ${s.getName()}`);
        });
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
        }
        console.log("----------------------");
    }

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }

    public addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        } else {
            console.log("Không tìm thấy học sinh trong danh sách tất cả học sinh.");
        }
    }

    public removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
            console.log(`Đã xóa học sinh ID ${id} khỏi lớp ${this.className}`);
        } else {
            console.log("Không tìm thấy học sinh trong lớp.");
        }
    }

    public editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã đổi tên học sinh ID ${id} thành ${newName}`);
        } else {
            console.log("Không tìm thấy học sinh trong lớp.");
        }
    }
}

let s1 = new Student(1, "An");
let s2 = new Student(2, "Bình");
let s3 = new Student(3, "Cường");
let s4 = new Student(4, "Dũng");
let s5 = new Student(5, "Hà");
let s6 = new Student(6, "Lan");

allStudents.push(s1, s2, s3, s4, s5, s6);

let classA = new Classroom("A");
let classB = new Classroom("B");

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

classA.showStudents();
classB.showStudents();

classA.removeStudent(2);
classA.showStudents();
console.log("Tất cả học sinh còn lại ngoài lớp:", allStudents.map(s => s.getName()));

classB.editStudent(4, "Dũng Pro");
classB.showStudents();
