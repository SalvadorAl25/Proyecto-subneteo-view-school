import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UnidadIComponent } from './Components/unidad-i/unidad-i.component';
import { Unidad2Component } from './Components/unidad2/unidad2.component';
import { Unidad3Component } from './Components/unidad3/unidad3.component';
import { NavbComponent } from './Components/Shared/navb/navb.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { APP_ROUTING } from './app.routes';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { SubnetComponent } from './Components/subnet/subnet.component';
import { Unidad4Component } from './Components/unidad4/unidad4.component';
import { Unidad5Component } from './Components/unidad5/unidad5.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UnidadIComponent,
    Unidad2Component,
    Unidad3Component,
    NavbComponent,
    InicioComponent,
    FooterComponent,
    SubnetComponent,
    Unidad4Component,
    Unidad5Component,
    UserComponent
  ],
  imports: [
    NgbModule,
    APP_ROUTING,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
