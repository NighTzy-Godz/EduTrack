import { Router } from "express";
import type { Request, Response, NextFunction} from 'express'
import StudentRepository from "../../infrastructure/repositories/StudentRepository";
import StudentUseCases from "../../application/StudentUseCases";
import StudentController from "../controllers/StudentController";
import validateSchema from "../../infrastructure/middleware/validateSchema";
import createStudentSchema from "../../infrastructure/validators/Student/createStudentSchema";

const app = Router()

const studentRepository = new StudentRepository()
const studentUseCases = new StudentUseCases(studentRepository)
const studentController = new StudentController(studentUseCases)

app.post('/create-student', validateSchema(createStudentSchema), (req:Request, res:Response, next:NextFunction) => studentController.createStudent(req,res,next))

export default app