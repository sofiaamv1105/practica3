import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/users.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home-users',
  standalone: true, // Asegura que el componente sea standalone
  imports: [CommonModule, UserCardComponent], // Importa módulos correctamente
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css']
})
export class HomeUsersComponent {
  usuarios: any[] = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.usuarios = await this.userService.getUsuarios();
  }
}

