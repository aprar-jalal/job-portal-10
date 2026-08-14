# Job Portal Application

A comprehensive web platform connecting job seekers with employers for posting, discovering, and applying for jobs.

## Features

- **Authentication & User Roles**: User sign-up, sign-in, and password reset for both Job Seekers and Employers.
- **Job Seeker Portal**: Search, filter, view job details, apply for positions, and save favorite jobs.
- **Employer Dashboard**: Post new job listings, manage posted jobs, review job applications, and update company profiles.
- **Admin & Analytics**: Admin reporting dashboard and notification system.

## Tech Stack

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling & UI**: Bootstrap 5, FontAwesome, ApexCharts / Chart.js
- **Utilities**: RxJS, Express (SSR support), jsPDF, Dropzone

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd job-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`.

## Project Structure

```text
job-portal/
├── src/
│   ├── app/
│   │   ├── Notifications/        # Notifications component & pages
│   │   ├── about-us/             # About Us page
│   │   ├── admin-reports/        # Admin reports dashboard
│   │   ├── empolyer/             # Employer workflows (Post Job, Company Profile, Applications)
│   │   ├── job-seeker/           # Job seeker portal and favorite jobs
│   │   ├── job-applecation-card/ # Job application cards and descriptions
│   │   ├── sign-in/              # Authentication components (Login, Sign-up, Password reset)
│   │   ├── app.component.ts      # Root component
│   │   └── app.routes.ts         # Application routing definitions
│   ├── assets/                   # Static assets & images
│   ├── index.html                # Main HTML entry point
│   ├── main.ts                   # Angular application bootstrapping
│   └── styles.css                # Global styles
├── angular.json                  # Angular CLI configuration
└── package.json                  # Project metadata and dependencies
```
