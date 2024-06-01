import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChaineComponent } from './chaine/chaine.component';
import { PageVideoComponent } from './page-video/page-video.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   
  { path: 'chaine', component: ChaineComponent },
  { path: 'page-video', component: PageVideoComponent },
  { path: '', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
