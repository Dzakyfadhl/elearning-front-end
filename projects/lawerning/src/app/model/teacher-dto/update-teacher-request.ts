import { Gender } from "../gender";

export class UpdateTeacherRequestDTO {

    id:string;
    firstName:string;
    lastName:string;
    email:string;
    titleDegree:string;
    gender:Gender;
    updatedBy:string;

}