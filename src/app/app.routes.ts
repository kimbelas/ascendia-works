import { Routes } from '@angular/router';
import { FormPageComponent } from './components/form-page/form-page.component';

export const appRoutes: Routes = [
  { path: '', component: FormPageComponent },
  { path: '**', redirectTo: '' }
];