import { ModuleModel } from './module-model';

export class DetailCourseResponse {
  id: string;
  code: string;
  name: string;
  modules: ModuleModel[];
}
