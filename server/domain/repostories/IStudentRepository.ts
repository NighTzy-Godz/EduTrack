import type IStudent from "../entities/IStudent";
import type { CreateStudentData } from "../entities/IStudent";

export interface IStudentRepository{
    createStudent(data: CreateStudentData): Promise<IStudent | void>
    findStudentByKey<K extends keyof IStudent>(query: Record<K, IStudent[K]>): Promise<IStudent | null>
}