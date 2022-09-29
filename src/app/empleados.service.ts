import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()

export class EmpleadosService{

  constructor(private servicoVentanaE:ServicioEmpleadosService){

  }

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz", "Presidente", 7500),
    new Empleado("Luis","Diaz", "Directo", 5500),
    new Empleado("Fernando","Diaz", "Administrativo", 4500),
    new Empleado("Miguel","Diaz", "Presidente", 7500),
];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicoVentanaE.muestraMensaje("Nombre: " + empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
  }

  actualizarEmpleadoServicio(indice:number,empleado:Empleado){

    let empeladoModificado=this.empleados[indice];
    empeladoModificado.nombre=empleado.nombre;
    empeladoModificado.apellido=empleado.apellido;
    empeladoModificado.cargo=empleado.cargo;
    empeladoModificado.salario=empleado.salario;

  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];

    return empleado;

  }

}
