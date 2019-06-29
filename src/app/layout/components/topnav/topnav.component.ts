import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LogueoService } from '../../services/logueo.service';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;
    private booleanObserver = true;

    constructor(public router: Router, private translate: TranslateService, private logueoService: LogueoService,
                private cookieService: CookieService, private spinner: NgxSpinnerService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
        /*this.logueoService.getMessage().subscribe(
            r => {
                this.booleanObserver = r;
                console.log(r);
            }
        );*/
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        // this.logueoService.sendMessage(!this.booleanObserver);
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        this.spinner.show();
        this.cookieService.delete('email');
        this.cookieService.delete('id');
        this.spinner.hide();
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
