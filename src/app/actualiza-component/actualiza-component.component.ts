import { Empleado } from './../empleado.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  titulo = 'Lista de empleados';
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  empleados:Empleado[]=[];
  indice:number;
  accion:number;

  constructor(private router:Router, private empleadoDataService:EmpleadosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados=this.empleadoDataService.empleados;
    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadoDataService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

  }

  volverHome(){

    this.router.navigate([""]);

  }

  /*actualizarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadoDataService.actualizarEmpleadoServicio(this.indice,miEmpleado);
    this.router.navigate([""]);

  }

  eliminarEmpleado(){

    this.empleadoDataService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate([""]);

  }*/

  actualizarEmpleado(){
    if(this.accion == 1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
      this.empleadoDataService.actualizarEmpleadoServicio(this.indice,miEmpleado);
      this.router.navigate([""]);
    }else{

      this.empleadoDataService.eliminarEmpleadoServicio(this.indice);
      this.router.navigate([""]);

    }




  }

}
