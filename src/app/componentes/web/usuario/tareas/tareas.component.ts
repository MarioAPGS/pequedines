import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Trabajo } from 'src/app/dataforms/Trabajo';
import { Tarea } from 'src/app/dataforms/Tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  file: File;
  filepath;
  titulo: String;
  entrega: String;
  descripcion: String;
  url: String;
  //-----------
  input_titulo:string = '';
  input_descripcion:string = '';
  input_file:any=null;


  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {

    this.servicio.setListaUsuarios1();

    this.servicio.setListaTareas1();

  }
  agregarTarea(titulo: String, entrega: String, descripcion: String, url: String) {

    var id;
    if (this.servicio.listaTareas.length == 0) {
      id = "0";
    } else {
      id = Number(this.servicio.listaTareas[this.servicio.listaTareas.length - 1].id) + 1;
    }

    this.servicio.agregarTarea(new Tarea(id + "", titulo + "", this.servicio.usuario.uid + "", descripcion + "", entrega + "", this.servicio.usuario.photoURL + ""));

  }

  

}
