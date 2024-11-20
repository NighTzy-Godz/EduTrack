import type IStudent from "../domain/entities/IStudent";
import type { CreateStudentData } from "../domain/entities/IStudent";
import type { IStudentRepository } from "../domain/repostories/IStudentRepository";
import generateStudentID from "../shared/utils/generateStudentId";

class StudentUseCases{
    constructor(private studentRepository: IStudentRepository){}

    async createStudent(data: CreateStudentData): Promise<IStudent | void>{
        try {
            const {email} = data
            const existingStudent = await this.studentRepository.findStudentByKey({email})
            if(existingStudent) throw new Error('Student already exists with this email')

            data.student_id = generateStudentID()
            return await this.studentRepository.createStudent(data)
        } catch (error) {
            throw new Error('Error on Creating a student - ' + error)
        }
        
    }
}

export default StudentUseCases