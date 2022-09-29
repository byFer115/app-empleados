import { Empleado } from "./empleado.model";

export class EmpleadosService{

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz", "Presidente", 7500),
    new Empleado("Luis","Diaz", "Directo", 5500),
    new Empleado("Fernando","Diaz", "Administrativo", 4500),
    new Empleado("Miguel","Diaz", "Presidente", 7500),
];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }

}
