import { CourseTypeCreateRequest } from "./course-type-create-request";

export class CourseTypeUpdateRequestDTO extends CourseTypeCreateRequest {

    id:string;
    updatedBy:string;
}