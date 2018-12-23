import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ExpedicionComponent } from './expedicion/expedicion.component';
import { DepositoFiscalComponent } from './deposito-fiscal/deposito-fiscal.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    RepuestosComponent,
    AdministracionComponent,
    ExpedicionComponent,
    DepositoFiscalComponent,
    SysAdminComponent,
    HeaderComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
