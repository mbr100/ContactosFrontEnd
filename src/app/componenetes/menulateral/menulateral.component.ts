import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {

    //Variables
    items: MenuItem[] = [];


    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'Contactos',
                icon: 'fas fa-id-card-alt',
                items: [
                    {label: 'Listado de contactos', icon: 'fas fa-list-ul'},
                    {separator: true},
                    {label: 'Nuevo contacto', icon: 'fas fa-user-plus'},
                ]
            }
        ];
    }

}
