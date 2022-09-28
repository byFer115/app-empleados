export class Empleado{

  constructor(nombre:string, apellido:string, cargo:string, salario:number){
    this.nombre=nombre;
    this.apellido=apellido;
    this.cargo=cargo;
    this.salario=salario;
  }

  nombre:String="";
  apellido:String="";
  cargo:String="";
  salario:number=0;

}
