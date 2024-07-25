import { Routes } from '@angular/router';
import { JoinComponent } from './modules/registration-onboarding/pages/join/join.component';
import { IndividualComponent } from './modules/registration-onboarding/pages/individual/individual.component';
import { BusinessComponent } from './modules/registration-onboarding/pages/business/business.component';

export const routes: Routes = [
  {
    path: '',
    component: JoinComponent,
  },
  {
    path: 'individual',
    component: IndividualComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
];
