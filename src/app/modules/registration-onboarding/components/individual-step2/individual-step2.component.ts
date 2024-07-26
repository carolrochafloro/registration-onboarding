import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-individual-step2',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './individual-step2.component.html',
  styleUrl: './individual-step2.component.scss',
})
export class IndividualStep2Component {
  step = 2;
  stage = 'Residency Info.';
}
