import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor() {}

  async getUsuarios() {
    const res = await fetch(this.apiUrl);
    let usuarios = await res.json();

    const descripciones = [
      "Apasionado por la tecnología y los videojuegos.",
      "Aventurero y amante de los viajes.",
      "Fanático del cine clásico y la literatura.",
      "Desarrollador con experiencia en Angular y Node.js.",
      "Amante de los gatos y la música rock.",
      "Cocinero aficionado con talento para la repostería.",
      "Explorador urbano y fotógrafo de paisajes."
    ];

    usuarios = usuarios.map((usuario: any, index: number) => ({
      ...usuario,
      foto: `https://randomuser.me/api/portraits/women/${index}.jpg`, 
      descripcion: descripciones[index % descripciones.length]
    }));

    return usuarios;
  }
}
