import { Component } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForOf, NgIf } from '@angular/common';

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis?: any;
  yaxis?: any;
  labels?: any;
  legend?: any;
  responsive?: any;
  dataLabels?: any;
  stroke?: any;
  colors?: string[];
  tooltip?: any;
  fill?: any;
};

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  imports: [ChartComponent, NgForOf, NgIf],
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent {

  totalUsers = 250;
  totalEmployers = 80;
  totalJobs = 120;
  totalApplications = 300;
  mostPostingCompany = { name: 'TechCorp', jobs: 45 };
  applicationStatuses = { pending: 150, accepted: 100, rejected: 50 };


  selectedTimeRange = '30d';


  pieChartOptions: ChartOptions;
  barChartOptions: ChartOptions;
  lineChartOptions: ChartOptions;
  donutChartOptions: ChartOptions;
  horizontalBarChartOptions: ChartOptions;
  sparklineOptions: ChartOptions;
  cards: { title: string; value: any; bg: string; icon: string }[] = [];
  constructor() {
    this.cards = [
      { title: 'Total Users', value: this.totalUsers, bg: 'bg-primary', icon: 'bi-people-fill' },
      { title: 'Employers', value: this.totalEmployers, bg: 'bg-info', icon: 'bi-briefcase-fill' },
      { title: 'Jobs Posted', value: this.totalJobs, bg: 'bg-warning', icon: 'bi-list-task' },
      { title: 'Applications', value: this.totalApplications, bg: 'bg-success', icon: 'bi-envelope-fill' },
      { title: 'Top Company', value: this.mostPostingCompany.name + ' (' + this.mostPostingCompany.jobs + ')', bg: 'bg-dark', icon: 'bi-building-fill' },
      { title: 'Pending Apps', value: this.applicationStatuses.pending, bg: 'bg-warning', icon: 'bi-hourglass-split' }
    ]
    this.pieChartOptions = {
      series: [this.totalUsers - this.totalEmployers, this.totalEmployers, this.totalJobs],
      chart: {
        type: 'pie',
        width: '100%',
        height: 320,
        animations: { enabled: true, easing: 'easeinout', speed: 800 }
      },
      labels: ['Job Seekers', 'Employers', 'Jobs'],
      legend: { position: 'bottom', fontSize: '14px', markers: { width: 12, height: 12 } },
      colors: ['#0d6efd', '#17a2b8', '#ffc107'],
      dataLabels: {
        enabled: true,
        formatter: (val: number, opts: any) => opts.w.config.series[opts.seriesIndex]
      },
      tooltip: { y: { formatter: (val: number) => `${val} units` } },
      responsive: [
        { breakpoint: 768, options: { chart: { height: 280 }, legend: { fontSize: '12px' } } },
        { breakpoint: 480, options: { chart: { height: 240 }, legend: { fontSize: '10px' } } }
      ]
    };

    this.barChartOptions = {
      series: [{ name: 'Jobs Posted', data: [5, 10, 7, 12, 9, 14, 8, 13, 11, 15, 17, 20] }],
      chart: { type: 'bar', height: 350, toolbar: { show: true } },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], title: { text: 'Month' } },
      colors: ['#0d6efd'],
      dataLabels: { enabled: false },
      tooltip: { y: { formatter: (val: number) => `${val} jobs` } },
      responsive: [{ breakpoint: 768, options: { chart: { height: 300 } } }]
    };

    this.lineChartOptions = {
      series: [{ name: 'Applications', data: [20, 30, 25, 35, 40, 45, 50, 55, 60, 75, 80, 90] }],
      chart: { height: 350, type: 'line', zoom: { enabled: false }, animations: { enabled: true, easing: 'easeinout', speed: 800 } },
      stroke: { curve: 'smooth', width: 3 },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], title: { text: 'Month' } },
      colors: ['#198754'],
      tooltip: { y: { formatter: (val: number) => `${val} applications` } },
      responsive: [{ breakpoint: 768, options: { chart: { height: 300 } } }]
    };

    this.donutChartOptions = {
      series: [this.applicationStatuses.pending, this.applicationStatuses.accepted, this.applicationStatuses.rejected],
      chart: { type: 'donut', width: '100%', height: 320 },
      labels: ['Pending', 'Accepted', 'Rejected'],
      colors: ['#ffc107', '#28a745', '#dc3545'],
      dataLabels: { enabled: true },
      legend: { position: 'bottom', fontSize: '14px' },
      tooltip: { y: { formatter: (val: number) => `${val} applications` } },
      responsive: [
        { breakpoint: 768, options: { chart: { height: 280 } } },
        { breakpoint: 480, options: { chart: { height: 240 } } }
      ]
    };

    this.horizontalBarChartOptions = {
      series: [{ name: 'Jobs', data: [30, 25, 20, 15, 10] }],
      chart: { type: 'bar', height: 350 },
      xaxis: { categories: ['Engineering', 'Sales', 'Marketing', 'Finance', 'HR'], title: { text: 'Job Category' } },
      yaxis: { title: { text: 'Number of Jobs' } },
      colors: ['#6f42c1'],
      dataLabels: { enabled: false },
      tooltip: { y: { formatter: (val: number) => `${val} jobs` } },
      fill: { type: 'fill'},
      responsive: [{ breakpoint: 768, options: { chart: { height: 300 } } }]
    };

    this.sparklineOptions = {
      series: [{ name: 'Active Users', data: [50, 60, 55, 70, 65, 80, 90] }],
      chart: { type: 'area', height: 350, sparkline: { enabled: false } },
      stroke: { curve: 'smooth', width: 3 },
      fill: { type: 'gradient', gradient: { shade: 'light', type: 'vertical', shadeIntensity: 0.5, gradientToColors: ['#17a2b8'], opacityFrom: 0.7, opacityTo: 0.3 } },
      colors: ['#17a2b8'],
      xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], title: { text: 'Day' } },
      tooltip: {
        x: { show: true },
        y: { formatter: (val: number) => `${val} users` }
      }
    };
  }

  updateTimeRange(range: string) {
    this.selectedTimeRange = range;
    console.log(`Time range updated to: ${range}`);
  }

  exportPDF() {
    const element = document.getElementById('report-content');
    if (!element) return;
    html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('JobPortalReport.pdf');
    });
  }

  exportExcel() {
    const reportData = [
      { Metric: 'Total Users', Value: this.totalUsers },
      { Metric: 'Total Employers', Value: this.totalEmployers },
      { Metric: 'Total Jobs', Value: this.totalJobs },
      { Metric: 'Total Applications', Value: this.totalApplications },
      { Metric: 'Most Posting Company', Value: `${this.mostPostingCompany.name} (${this.mostPostingCompany.jobs} jobs)` },
      { Metric: 'Pending Applications', Value: this.applicationStatuses.pending },
      { Metric: 'Accepted Applications', Value: this.applicationStatuses.accepted },
      { Metric: 'Rejected Applications', Value: this.applicationStatuses.rejected }
    ];
    const worksheet = XLSX.utils.json_to_sheet(reportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'JobPortalReport.xlsx');
  }
}
