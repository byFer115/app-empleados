import { DataServices } from './data.services';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()

export class EmpleadosService{

  constructor(private servicoVentanaE:ServicioEmpleadosService, private dataService:DataServices){

  }
  empleados:Empleado[]=[];
  /*empleados:Empleado[]=[
    new Empleado("Juan","Diaz", "Presidente", 7500),
    new Empleado("Luis","Diaz", "Directo", 5500),
    new Empleado("Fernando","Diaz", "Administrativo", 4500),
    new Empleado("Miguel","Diaz", "Presidente", 7500),
  ];*/

  obtenerEmpleados(){
    return this.dataService.obtenerEmpleados();
  }

  setEmpleados(empleados:Empleado[]){
    this.empleados= empleados;
  }

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicoVentanaE.muestraMensaje("Nombre: " + empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados).subscribe({
      next: (res)=> {
        console.log(res);
      },
      error: (error)=> console.log(error)
    });
  }

  actualizarEmpleadoServicio(indice:number,empleado:Empleado){

    let empeladoModificado=this.empleados[indice];
    empeladoModificado.nombre=empleado.nombre;
    empeladoModificado.apellido=empleado.apellido;
    empeladoModificado.cargo=empleado.cargo;
    empeladoModificado.salario=empleado.salario;
    this.dataService.actualizarEmpleados(indice,empeladoModificado).subscribe({
      next: (res)=>{
        console.log('Empleado actualizado' + res);
      },
      error: (e) => console.log(e)
    });
    this.dataService.guardarEmpleados(this.empleados).subscribe({
      next: (res)=> {
        console.log(res);
      },
      error: (error)=> console.log(error)
    });
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];

    return empleado;

  }

  eliminarEmpleadoServicio(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice).subscribe({
      next: ()=> {
        console.log('Empleado eliminado');
      },
      error: () => console.log()
    });
    this.dataService.guardarEmpleados(this.empleados).subscribe({
      next: (res)=> {
        console.log(res);
      },
      error: (error)=> console.log(error)
    });
  }

}
