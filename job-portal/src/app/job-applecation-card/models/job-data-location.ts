export interface JobFullDisc {
    JobDescription: string;
    KeyResponsibilities: { [key: number]: string };
    SkillandExperience: { [key: number]: string };
}
export interface JobDataLocation {
    id: number;
    CompanyName: string;
    JobType: string;
    JobLocation: string;
    JobLogo: string;
    JobName: string;
    AboutJop: string;
    jobFullDisc: JobFullDisc;
}
