import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Input("data") data: any;
  @Output() detalles = new EventEmitter();
  nombre: string []=[];
  contra: string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  
  usuario(nombre_de_usuario, contra) {
    this.nombre = nombre_de_usuario;
    this.contra = contra;
}

}
