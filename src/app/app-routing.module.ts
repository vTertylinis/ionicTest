import { FirstPagePage } from './first-page/first-page.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'first-page',
    loadChildren: () =>
      import('./first-page/first-page.module').then(
        (m) => m.FirstPagePageModule
      ),
  },
  {
    path: 'first-page',
    redirectTo: 'first-page',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
