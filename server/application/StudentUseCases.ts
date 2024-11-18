import type IStudent from "../domain/entities/IStudent";
import type { CreateStudentData } from "../domain/entities/IStudent";
import type { IStudentRepository } from "../domain/repostories/IStudentRepository";
import generateStudentID from "../shared/utils/generateStudentId";

class StudentUseCases{
    constructor(private studentRepository: IStudentRepository){}

    async createStudent(data: CreateStudentData): Promise<IStudent | void>{
        data.student_id = generateStudentID()
        return await this.studentRepository.createStudent(data)
    }
}

export default StudentUseCases