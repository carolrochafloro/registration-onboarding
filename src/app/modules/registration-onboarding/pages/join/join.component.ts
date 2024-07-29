import { Component, Input } from '@angular/core';
import { JoinUsComponent } from '../../components/join-us/join-us.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [JoinUsComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  constructor(private router: Router) {}

  handleButtonClick(accountType: string) {
    switch (accountType) {
      case 'individual':
        this.router.navigate(['/individual']);
        break;
      case 'business':
        this.router.navigate(['/business']);
        break;
      default:
        console.error('Unknown account type:', accountType);
        break;
    }
  }
}
