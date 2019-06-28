import { Component, OnInit, Input } from '@angular/core';

export class Charla {
  strImagen = '';
  strDescripcion = '';
  strHora = '';
  strTitulo = '';
  strAula = '';
}

@Component({
  selector: 'app-charla',
  templateUrl: './charla.component.html',
  styleUrls: ['./charla.component.scss']
})
export class CharlaComponent implements OnInit {
  @Input() charla: Charla;

  constructor() { }

  ngOnInit() {
  }

}
