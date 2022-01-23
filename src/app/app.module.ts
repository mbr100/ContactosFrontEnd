import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelMenuModule} from 'primeng/panelmenu';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {CabeceroComponent} from './componenetes/cabecero/cabecero.component';
import {MenulateralComponent} from './componenetes/menulateral/menulateral.component';
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ListadoContactosComponent} from './componenetes/contactos/listado-contactos/listado-contactos.component';
import {ContactoService} from "./Servicios/Contacto/contacto.service";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {NuevoContactoComponent} from "./componenetes/contactos/nuevo-contacto/nuevo-contacto.component";
import {FormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import { InicioComponent } from './componenetes/inicio/inicio/inicio.component';


let HttpModule;

@NgModule({
    declarations: [
        AppComponent,
        CabeceroComponent,
        MenulateralComponent,
        ListadoContactosComponent,
        NuevoContactoComponent,
        InicioComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        PanelMenuModule,
        MenuModule,
        TableModule,
        FormsModule,
        InputMaskModule,
        MessagesModule,
    ],
    providers: [ContactoService,MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
