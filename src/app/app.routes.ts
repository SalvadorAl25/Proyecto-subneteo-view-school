import { RouterModule, Routes} from '@angular/router' ;
import { APPLICATION_MODULE_PROVIDERS } from '@angular/core/src/application_module';

import { UnidadIComponent } from './Components/unidad-i/unidad-i.component';
import { Unidad2Component } from './Components/unidad2/unidad2.component';
import { Unidad3Component } from './Components/unidad3/unidad3.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { Unidad4Component } from './Components/unidad4/unidad4.component';
import { Unidad5Component } from './Components/unidad5/unidad5.component';
import { SubnetComponent } from './Components/subnet/subnet.component';

const APP_ROUTES: Routes = [
    {path: 'Inicio', component: InicioComponent},
    {path: 'Unidad_1', component: UnidadIComponent},
    {path: 'Unidad_2', component: Unidad2Component},
    {path: 'Unidad_3', component: Unidad3Component},
    {path: 'Unidad_4', component: Unidad4Component},
    {path: 'Unidad_5', component: Unidad5Component},
    {path: 'Subnet', component: SubnetComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
