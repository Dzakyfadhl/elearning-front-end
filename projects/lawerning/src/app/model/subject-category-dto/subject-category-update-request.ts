import { SubjectCategoryCreateRequestDTO } from "./subject-category-create-request";

export class SubjectCategoryUpdateRequestDTO extends SubjectCategoryCreateRequestDTO {

    id:string;
    updatedBy:string;
}