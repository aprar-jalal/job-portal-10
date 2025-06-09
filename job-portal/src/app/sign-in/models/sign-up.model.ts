export class SignUpModel {
 
  email: string = '';
  password: string = '';
  password_confirmation: string = '';
  phone: string = '';
  location: string = '';
  role_id: number = 0;

  company_name?: string = '';
  industry?: string = '';

  first_name?: string = '';
  last_name?: string = '';
  major?: string = '';
  degree?: string = '';
  years_of_experience?: number = 0;
  gender?: 'male' | 'female';
 
}
