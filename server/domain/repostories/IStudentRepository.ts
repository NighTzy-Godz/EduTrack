import type IStudent from "../entities/IStudent";
import type { CreateStudentData } from "../entities/IStudent";

export interface IStudentRepository{
    createStudent(data: CreateStudentData): Promise<IStudent | void>
}