import { Component, Output } from '@angular/core';
import { IndividualStep1Component } from '../../components/individual-step1/individual-step1.component';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [IndividualComponent, IndividualStep1Component],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
})
export class IndividualComponent {}
