import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Empleado } from './empleado.model';
import { Component } from '@angular/core';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleados';
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  empleados:Empleado[]=[];

  constructor(private miServicio:ServicioEmpleadosService, private empleadoDataService:EmpleadosService){
    this.empleados=this.empleadoDataService.empleados;
  }



  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadoDataService.agregarEmpleadoServicio(miEmpleado);

  }
}
