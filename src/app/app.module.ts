import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { FormularioComponentComponent } from './components/formulario-component/formulario-component.component';
import { ViewPostComponent } from './components/view-post/view-post.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponentComponent,
    FormularioComponentComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
