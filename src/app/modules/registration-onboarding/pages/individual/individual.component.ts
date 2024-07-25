import { Component, Output } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
})
export class IndividualComponent {
  step = 1;
  stage = 'Personal Info.';
}
