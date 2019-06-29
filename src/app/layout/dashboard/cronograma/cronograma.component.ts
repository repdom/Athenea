import { Component, OnInit } from '@angular/core';
import { Charla } from '../charla/charla.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../../../services/login.service';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent implements OnInit {
  public charlas: Charla[] = [];

  constructor(private loginService: LoginService, private spinner: NgxSpinnerService, private translate: TranslateService) {
    this.obtenerCronograma();
  }

  ngOnInit() {
  }

  obtenerCronograma() {
    this.spinner.show();
    this.loginService.getCharlasGenerales().subscribe(charlasResponse => {
      charlasResponse.forEach(elementCharla => {
        const charla: Charla = {
          strImagen: (elementCharla.imagenCharlista === null) ? '' : elementCharla.imagenCharlista,
          strDescripcion: elementCharla.descripcionCharla,
          strHora: elementCharla.horario,
          strTitulo: elementCharla.tema,
          strAula: elementCharla.lugar,
          strCharlista: elementCharla.charlista,
          strDuracion: elementCharla.talkFormat
        };
        // console.log(charla);
        this.charlas.push(charla);
      });
      // console.log(this.charlas);
    }, (error) => {
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }
}
