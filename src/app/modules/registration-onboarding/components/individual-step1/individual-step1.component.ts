import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgForm, FormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/individual.interface';

@Component({
  selector: 'app-individual-step1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './individual-step1.component.html',
  styleUrl: './individual-step1.component.scss',
})
export class IndividualStep1Component {
  @Output() formSubmitted = new EventEmitter<IUser>();

  fullName = '';
  email = '';
  password = '';
  agreeTerms = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      const user: IUser = {
        fullName: form.value.fullName,
        email: form.value.email,
        password: form.value.password,
        residencyInfo: {
          phone: '',
          address: '',
          country: '',
        },
        bvn: false,
      };

      form.resetForm({
        fullName: '',
        email: '',
        password: '',
        agreeTerms: false,
      });

      this.formSubmitted.emit(user);
    }
  }
}
