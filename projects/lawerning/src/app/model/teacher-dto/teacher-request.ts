import { Gender } from "../gender";

export class TeacherRequestDTO {

code:string;
firstName:string;
lastName:string;
phone:string;
gender:Gender;
username:string;
password:string;
email:string;
roleId:string;
roleVersion:number;
createdBy:string;
titleDegree:string;

constructor(){}

}