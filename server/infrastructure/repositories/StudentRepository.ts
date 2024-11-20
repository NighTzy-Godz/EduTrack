import type IStudent from "../../domain/entities/IStudent";
import type { CreateStudentData } from "../../domain/entities/IStudent";

import type { IStudentRepository } from "../../domain/repostories/IStudentRepository";
import Student from "../database/models/Student";

class StudentRepository implements IStudentRepository{
    async createStudent(data: CreateStudentData): Promise<IStudent | void> {
        try {
            const newStudent = new Student(data)
            await newStudent.save()
            return newStudent
        } catch (error) {
            console.log('Error on Creating Student - ', error)
        }
        
    }

    async findStudentByKey<K extends keyof IStudent>(query: Record<K, IStudent[K]>): Promise<IStudent | null> {
        return null
    }
}

export default StudentRepository