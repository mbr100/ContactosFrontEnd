import { Component, OnInit } from '@angular/core';
import {Contacto} from "../../../Modelos/Contacto/contacto";
import {ContactoService} from "../../../Servicios/Contacto/contacto.service";

@Component({
  selector: 'app-listado-contactos',
  templateUrl: './listado-contactos.component.html',
  styleUrls: ['./listado-contactos.component.css']
})
export class ListadoContactosComponent implements OnInit {

    contactos: Contacto[] =[];

    constructor(private contactoService: ContactoService) {}

    ngOnInit(): void
    {
        this.contactoService.getContactos().subscribe(contactos => this.contactos = contactos);
    }

    verContacto(contacto: Contacto): void
    {
        console.log(contacto);
    }
}
