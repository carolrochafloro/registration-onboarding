import { Component, Input, Output } from '@angular/core';
import { IndividualStep1Component } from '../../components/individual-step1/individual-step1.component';
import { IndividualStep2Component } from '../../components/individual-step2/individual-step2.component';
import { HeaderComponent } from '../../components/header/header.component';
import { IUser } from '../../interfaces/individual.interface';
import { IndividualStep3Component } from '../../components/individual-step3/individual-step3.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [
    HeaderComponent,
    IndividualStep1Component,
    IndividualStep2Component,
    IndividualStep3Component,
  ],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
})
export class IndividualComponent {
  constructor(private router: Router) {}

  index = 0;
  step = 1;
  stageOptions = ['Personal Info.', 'Residency Info.', 'Bank Verification'];
  stage = this.stageOptions[this.index];

  user?: IUser;

  onNewStep(newStep: number) {
    if (newStep < 1) {
      this.router.navigate(['']);
    }

    this.step = newStep;
    this.stage = this.stageOptions[this.index--];
  }

  goToNextStep(user: IUser) {
    this.user = user;
    this.step++;
    this.stage = this.stageOptions[this.index++];
  }

  goToDashboard(user: IUser) {
    // salvar no localstorage enquanto não faço a api
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/dashboard']);
  }
}
