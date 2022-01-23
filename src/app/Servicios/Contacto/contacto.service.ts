import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contacto} from "../../Modelos/Contacto/contacto";

@Injectable({
    providedIn: 'root'
})
export class ContactoService
{
    url: string = "http://localhost:4000/contactos";

    constructor(private http: HttpClient){}

    getContactos():Observable<any> {
        return this.http.get(this.url);
    }

    nuevoContacto(contacto: Contacto):Observable<any> {
        return this.http.post(this.url, contacto);
    }

}
