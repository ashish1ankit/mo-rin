import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MasterComponent } from './pages/master/master.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DoComponent } from './pages/do/do.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'master', component: MasterComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'do', component: DoComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
