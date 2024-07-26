import { Component, Output } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgForm, FormsModule } from '@angular/forms';
import { IUser } from '../../interfaces/individual.interface';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
})
export class IndividualComponent {
  step = 1;
  stage = 'Personal Info.';

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
      };

      localStorage.setItem('user', JSON.stringify(user));

      form.resetForm({
        fullName: '',
        email: '',
        password: '',
        agreeTerms: false,
      });
    }
  }
}
