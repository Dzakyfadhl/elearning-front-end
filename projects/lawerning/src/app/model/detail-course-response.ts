import { ModuleModel } from './module-model';

export class DetailCourseResponse {
  id: string;
  code: string;
  name: string;
  capacity: number;
  description: string;
  totalStudent: number;
  periodStart: Date;
  periodEnd: Date;
  modules: ModuleModel[];
}
