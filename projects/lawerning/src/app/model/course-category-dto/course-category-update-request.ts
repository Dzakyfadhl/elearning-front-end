import { CourseCategoryCreateRequestDTO } from "./course-category-create-request";

export class CourseCategoryUpdateRequestDTO extends CourseCategoryCreateRequestDTO {

    id:string;
    updatedBy:string;

}