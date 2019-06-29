import {AfterViewChecked, Component, ElementRef, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SwUpdate } from '@angular/service-worker';

/*
  [6/4, 7:34 PM]: RED -> C22035 -> rgb(194,32,53)
  [6/4, 7:35 PM]: BLUE -> 221B4E -> rgb(34,27,78)
* */

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
    constructor(private translate: TranslateService, private elementRef: ElementRef,
                private router: Router, private cookieService: CookieService,
                private swUpdate: SwUpdate) {
        translate.setDefaultLang(navigator.language.substr(0, 2));
    }

    ngAfterViewChecked() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fffff';
    }

    ngOnInit() {
      if (this.swUpdate.isEnabled) {
        this.swUpdate.available.subscribe(() => {
            if (confirm('Una nueva versión disponible. ¿Desea cargar la nueva versión?')) {
                window.location.reload();
            }
        });
      }
      console.log(navigator.language.substr(0, 2));
      if (!this.cookieService.check('email')) {
        this.router.navigate(['/login']);
      }
    }
}
