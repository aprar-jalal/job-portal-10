export interface AppliedJob {
  user_id: number;
  job_id: number;
  application_status: string;
  applied_at: string;

  //Mohammad
  job_title: string;
  job_type: string;
  salary: number | string;
  location: string;
  description: string;
  availability: string;
  workplace: string;
  job_category: string;
  jobSeekerEmail: string;
  jobSeekerPhone: string;
  jobSeekerCountry: string;
  job_seeker_id: number;
  jobSeekerName: string;
  jobSeekerMajor: string;
  jobSeekerAvatar: string | null;
  jobSeekerDescription: string;
  jobSeekerSkills: string;
  jobSeekerDegree: string;
  jobSeekerExperience: number;
  jobSeekerGender: string;
}
