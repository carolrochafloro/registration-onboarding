import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/individual.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-individual-step3',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './individual-step3.component.html',
  styleUrl: './individual-step3.component.scss',
})
export class IndividualStep3Component {
  @Input() user?: IUser;
  @Output() formSubmitted = new EventEmitter<IUser>();

  onSubmit(form: NgForm) {
    if (this.user) {
      this.user.bvn = true;
      this.formSubmitted.emit(this.user);
      form.resetForm();
    }
  }
}
