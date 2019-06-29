import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public email = '';

    constructor(private router: Router, private loginService: LoginService, private spinner: NgxSpinnerService,
                private cookieService: CookieService) {}

    ngOnInit() {}

    onLogin() {
        this.spinner.show();
        this.loginService.getCharlasRegistradas(this.email).subscribe((serviceCharlasResponse) => {
            console.log(serviceCharlasResponse);
            this.cookieService.set('email', this.email, 1);
            this.cookieService.set('id', serviceCharlasResponse.id);
            localStorage.setItem('isLoggedin', 'true');
        }, (error) => {
            swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Email no encontrado',
            });
            this.spinner.hide();
        }, () => {
            this.router.navigate(['/dashboard']);
            this.spinner.hide();
        });
    }
}
