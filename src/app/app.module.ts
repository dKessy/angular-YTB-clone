import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChaineComponent } from './chaine/chaine.component';
import { PageVideoComponent } from './page-video/page-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChaineComponent,
    PageVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
