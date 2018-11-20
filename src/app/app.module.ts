import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, routes } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatSelectModule } from '@angular/material';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormularioComponent } from './formulario/formulario.component';

export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
