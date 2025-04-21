import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() usuario: any;

  ngOnInit() {
    console.log(this.usuario);
  }
}