export class Job {
  job_id: number = 0;
  employer_id: number = 0;
  job_title: string = '';
  description: string = '';
  location: string = '';
  salary: string = '';
  job_type: string = '';
  workplace: string = '';
  availability: number = 0;
  created_at: string = '';
  updated_at: string = '';
  //aprar
  company_name:string='';
  logo_url:string='';
 job_full_disc?: {
    JobDescription?: string;
    KeyResponsibilities?: string[];
    SkillandExperience?: string[];
  };
}
