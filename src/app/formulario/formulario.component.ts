import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private informacionService: InformacionService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl()
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formulario.value);

    const nuevoPost = this.informacionService.agregarPost(this.formulario.value);
    /* console.log(nuevoPost); */


  }

}
