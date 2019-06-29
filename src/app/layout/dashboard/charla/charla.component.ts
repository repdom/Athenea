import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class Charla {
  numIdHorario = 0;
  strImagen = '';
  strDescripcion = '';
  strHora = '';
  strTitulo = '';
  strAula = '';
  strCharlista = '';
  strDuracion = '';
}

@Component({
  selector: 'app-charla',
  templateUrl: './charla.component.html',
  styleUrls: ['./charla.component.scss']
})
export class CharlaComponent implements OnInit {
  @Input() charla: Charla;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
