import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponentComponent } from './components/formulario-component/formulario-component.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: "/home"},
  {path: 'home', component: HomeComponent},
  {path: 'new', component: FormularioComponentComponent},
  {path: 'post/:idpost', component: ViewPostComponent},
  {path: 'category/:categoryTitle', component: HomeComponent},
  {path: "**", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
