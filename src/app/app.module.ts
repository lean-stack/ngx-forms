import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { HomeComponent } from './pages/home/home.component';
import { ModelDrivenComponent } from './pages/model-driven/model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HomeComponent,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
