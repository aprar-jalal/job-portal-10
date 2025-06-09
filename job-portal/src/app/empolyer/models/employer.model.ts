export class Employer {
  employer_id: number = 0;
  company_name: string = "";
  description: string = "";
  industry: string = "";
  logo_url: string | null = "";
  established_date: Date = new Date();
  company_size: string = "";
  verified: boolean = false;
}
