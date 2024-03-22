import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() single_pro:any;
  constructor(private router:Router){}
  showSingle(id:number)
  {
    this.router.navigate(['/single-pro',id]);
  }

}
