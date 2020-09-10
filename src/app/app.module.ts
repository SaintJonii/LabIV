import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilsModule } from './utils/utils.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CargarPersonaComponent } from './components/cargar-persona/cargar-persona.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CargarPersonaComponent,
    ListadoPersonasComponent,
    RootNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
