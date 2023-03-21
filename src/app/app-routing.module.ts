import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'organization-tree',
        loadChildren: () =>
          import('./modules/modules.module').then((m) => m.ModulesModule),
    },
    { path: '', redirectTo: 'organization-tree', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }