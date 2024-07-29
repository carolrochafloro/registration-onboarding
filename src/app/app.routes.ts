import { Routes } from '@angular/router';
import { IndividualComponent } from './modules/registration-onboarding/pages/individual/individual.component';
import { JoinComponent } from './modules/registration-onboarding/pages/join/join.component';

export const routes: Routes = [
  {
    path: '',
    component: JoinComponent,
  },
  {
    path: 'individual',
    component: IndividualComponent,
  },
];
