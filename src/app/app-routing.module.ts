import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//     path: '',
//     pathMatch : 'full',
//     redirectTo : 'GetResponse'
//  },
  {
    path:'',
    loadChildren: () =>
    import('./components/get-response/get-response.module').then(
      (m) => m.GetResponseModule
    )
  },
  {
    path:'sample',
    loadChildren: () => import('./components/sample/sample.module').then((m)=>m.SampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
