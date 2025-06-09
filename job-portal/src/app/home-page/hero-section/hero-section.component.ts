import { Component } from '@angular/core';
import { SearchService } from '../../job-applecation-card/services/search/search.service';
import { Router } from '@angular/router';
import{FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hero-section',
  imports: [FormsModule ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  searchQuery: string = '';
 constructor(private SearchService:SearchService,private router: Router ){}

onSearch() {
  const trimmedQuery = this.searchQuery.trim();

  if(!trimmedQuery){
Swal.fire({
  title: `there is no job with this${trimmedQuery}` ,
  icon: "error",
  draggable: true
});
return
  }
  this.SearchService.setSearchQuery(trimmedQuery);

    // Scroll to job cards section
    const jobSection = document.getElementById('cards');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
