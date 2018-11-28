import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { HomeComponent } from './pages/home/home.component';
import { ModelDrivenComponent } from './pages/model-driven/model-driven.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PasswordMatchDirective, MatchFieldDirective } from './validation/password-match.directive';
import { TableFormComponent } from './pages/table-form/table-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HomeComponent,
    ModelDrivenComponent,
    NavBarComponent,
    PasswordMatchDirective,
    MatchFieldDirective,
    TableFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
