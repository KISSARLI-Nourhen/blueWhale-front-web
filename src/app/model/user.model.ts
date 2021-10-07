import {Department} from 'src/app/model/department.model';
import {Role} from 'src/app/model/role.model';

export interface User{
  user_id ?: number;
  first_name: string;
  last_name: string;
  passwords: number;
  email: string;
  active: boolean;
  department: Department;
  role: Role[];
}
