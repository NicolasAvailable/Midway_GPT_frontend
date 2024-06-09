import { Routes } from '@angular/router';
import { AuthComponent } from '../../auth.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../../modules/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../../modules/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'forgotten',
        loadChildren: () =>
          import('../../modules/forgotten/forgotten.module').then(
            (m) => m.ForgottenModule
          ),
      },
    ],
  },
];
