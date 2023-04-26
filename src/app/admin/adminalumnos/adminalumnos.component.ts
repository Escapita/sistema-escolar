import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminalumnos',
  templateUrl: './adminalumnos.component.html',
  styleUrls: ['./adminalumnos.component.css']
})
export class AdminalumnosComponent implements OnInit{
  
  title="";

  constructor(private router: Router,
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    
    this.title=this.route.snapshot.params['op'];
  }
  
  goMenu(){
    this.router.navigate(['admin']);
  }
}
