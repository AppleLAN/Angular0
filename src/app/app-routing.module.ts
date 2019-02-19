import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteSuperiorComponent } from './componente-superior/componente-superior.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'component-superior', pathMatch: 'full' },
  {
    path: 'component-superior',
    children: [{ path: '', component: ComponenteSuperiorComponent }, { path: '', component: SidebarComponent, outlet: 'sidebar' }]
  },
  {
    path: 'main',
    loadChildren: 'src/app/main/main.module#MainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
