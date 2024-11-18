import mongoose, { type Document } from "mongoose";
import  { Gender } from "../../../domain/entities/GlobalEnum";

interface IStudent extends Document{
    student_id: string,
    first_name: string,
    last_name: string,
    gender: Gender,
    email: string,
    profile_img: string,
    is_student: boolean
}

const studentSchema = new mongoose.Schema<IStudent>({
    student_id:{
        type: String,
        required: true
    },

    first_name:{
        type: String,
        required: true
    },
    
    last_name:{
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true,
        enum: Object.values(Gender)
    },

    profile_img:{
        type: String,
        default: 'https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg'
    },

    is_student:{
        type: Boolean,
        default: true
    }
})

const Student = mongoose.model<IStudent>('Student', studentSchema)

export default Student