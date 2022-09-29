import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Lista de empleados';
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  empleados:Empleado[]=[];

  constructor(private miServicio:ServicioEmpleadosService, private empleadoDataService:EmpleadosService) {

   }

  ngOnInit(): void {
    this.empleados=this.empleadoDataService.empleados;
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadoDataService.agregarEmpleadoServicio(miEmpleado);

  }

}
