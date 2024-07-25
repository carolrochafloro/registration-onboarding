import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../../components/header-login/header-login.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [HeaderLoginComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {}
