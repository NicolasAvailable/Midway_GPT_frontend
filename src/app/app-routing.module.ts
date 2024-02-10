import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: "auth",
      loadChildren: () => import('./auth/auth.module').then((auth) => auth.AuthModule)
    },
    {
      path: "app",
      loadChildren: () => import('./core/core.module').then((core) => core.CoreModule)
    },
    { 
      path: '**', 
      redirectTo: 'auth' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
