import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

  dataBaseURL='https://mis-clientes-b4919-default-rtdb.firebaseio.com/datos.json';

  constructor(private httpClient:HttpClient){}

  obtenerEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.dataBaseURL);
  }

  guardarEmpleados(empleados:Empleado[]){

   return this.httpClient.put(this.dataBaseURL, empleados);
  }

  actualizarEmpleados(indice:number, empleado:Empleado):Observable<Empleado>{
    let url = 'https://mis-clientes-b4919-default-rtdb.firebaseio.com/datos/'+ indice +'.json';
    return this.httpClient.put<Empleado>(url, empleado);
  }

  eliminarEmpleado(indice:number):Observable<void>{
    let url  = 'https://mis-clientes-b4919-default-rtdb.firebaseio.com/datos/'+ indice +'.json';
    return this.httpClient.delete<void>(url);
  }
}
