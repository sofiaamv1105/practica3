import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  items = [0,0,0,0];
  option = true;
  num1 = 5;
  num2 = 10;
  productos:any;

  constructor(
    private listService: ListService
  ){   
  }

  ngOnInit(){
    this.cargaProductos();
  }

  async cargaProductos(){
    this.productos = await this.listService.getProducts();
    console.log(this.productos);
  }
}
