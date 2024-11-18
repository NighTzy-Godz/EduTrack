import type { Gender } from "./GlobalEnum";

export default interface IStudent{
    student_id: string,
    first_name: string,
    last_name: string,
    gender: Gender,
    email: string,
    profile_img?: string,
    is_student:boolean
}

export interface CreateStudentData{
    student_id: string
    first_name: string,
    last_name: string,
    gender: Gender,
    email: string,

}