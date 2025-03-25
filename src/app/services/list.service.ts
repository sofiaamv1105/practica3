import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  async getProducts(){
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  }

}
