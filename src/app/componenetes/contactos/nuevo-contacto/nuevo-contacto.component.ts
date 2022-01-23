import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contacto} from "../../../Modelos/Contacto/contacto";
import {Message, MessageService} from "primeng/api";
import {ContactoService} from "../../../Servicios/Contacto/contacto.service";


@Component({
    selector: 'app-nuevo-contacto',
    templateUrl: './nuevo-contacto.component.html',
    styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {
    value = 'Clear me';
    Contacto: Contacto = {
        Id_Contacto: 0,
        Nombre: '',
        Apellido_1: '',
        Apellido_2: '',
        Telefono: '',
        Email: '',
    };
    msgs1: Message[] = [];

    constructor(private messageService: MessageService, private contactoService: ContactoService) { }


    ngOnInit(): void
    {
        this.msgs1 = [
            {severity:'success', summary:'Success', detail:'Message Content'},
            {severity:'info', summary:'Info', detail:'Message Content'},
            {severity:'warn', summary:'Warning', detail:'Message Content'},
            {severity:'error', summary:'Error', detail:'Message Content'},
            {severity:'custom', summary:'Custom', detail:'Message Content', icon: 'pi-file'}
        ];
    }

    CrearContacto({value, valid}: NgForm): void {
        if (!valid) {
            this.messageService.add({severity:'error', summary:'Error', detail:'Formulario no válido'});
        } else {
            console.log(value);
            this.contactoService.nuevoContacto(value).subscribe(
                res => {
                    console.log(res);
                    this.messageService.add({severity:'success', summary:'Success', detail:'Contacto creado correctamente'});
                },
                err => {
                    console.log(err);
                    this.messageService.add({severity:'error', summary:'Error', detail:'Error al crear el contacto'});
                }
            );
        }
    }

    eliminar() {
        console.log('Eliminando');
    }
}
