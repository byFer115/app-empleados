import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Empleado } from './empleado.model';
import { Component } from '@angular/core';

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

  constructor(private miServicio:ServicioEmpleadosService){

  }

  empleados:Empleado[]=[
      new Empleado("Juan","Diaz", "Presidente", 7500),
      new Empleado("Luis","Diaz", "Directo", 5500),
      new Empleado("Fernando","Diaz", "Administrativo", 4500),
      new Empleado("Miguel","Diaz", "Presidente", 7500),
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }
}
