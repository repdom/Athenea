import {AfterViewChecked, Component, ElementRef, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
                private router: Router, private cookieService: CookieService) {
        translate.setDefaultLang('es');
    }

    ngAfterViewChecked() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fffff';
    }

    ngOnInit() {
      console.log(navigator.language);
      if (!this.cookieService.check('correo')) {
        this.router.navigate(['/login']);
      }
    }
}
