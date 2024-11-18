import type { NextFunction, Request, Response } from "express";

import type StudentUseCases from "../../application/StudentUseCases";

class StudentController{
    constructor(private studentUseCases: StudentUseCases){}

    async createStudent(req:Request, res: Response, next:NextFunction){
        try {
            const newStudent = await this.studentUseCases.createStudent(req.body)
            res.json(newStudent)
        } catch (error) {
            console.log('Error on creating a student: ', error)
            next(error)
        }
    }
}

export default StudentController