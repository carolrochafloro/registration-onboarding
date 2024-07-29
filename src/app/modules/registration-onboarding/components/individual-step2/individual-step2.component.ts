import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/individual.interface';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-individual-step2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './individual-step2.component.html',
  styleUrl: './individual-step2.component.scss',
})
export class IndividualStep2Component {
  @Input() user?: IUser;

  country = ['Brazil', 'Morocco', 'Poland', 'France'];
  selectedCountry = '';

  onCountryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCountry = selectElement.value;
  }

  @Output() formSubmitted = new EventEmitter<IUser>();

  onSubmit(form: NgForm) {
    if (this.user) {
      this.user.residencyInfo = {
        phone: form.value.phone,
        address: form.value.address,
        country: this.selectedCountry,
      };

      this.formSubmitted.emit(this.user);
      form.resetForm();
    }
  }
}
