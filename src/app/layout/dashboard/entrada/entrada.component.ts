import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  public codigo = '';
  public qr = '';

  constructor(private cookieService: CookieService, public _DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.obtenerId();
  }

  obtenerId() {
    this.codigo = this.cookieService.get('id');
    this.qr = `https://form.jconfdominicana.org/correo/qr?id=${this.codigo}`;
  }

}
