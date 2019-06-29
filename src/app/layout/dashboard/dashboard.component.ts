import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { LogueoService } from '../services/logueo.service';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Charla } from './charla/charla.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import swal from 'sweetalert2';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    // displayedColumns = ['position', 'name', 'weight', 'symbol'];
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    // places: Array<any> = [];
    private txtEmail = '';
    public charlas: Charla[] = [];

    applyFilter(filterValue: string) {
        // filterValue = filterValue.trim(); // Remove whitespace
        // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        // this.dataSource.filter = filterValue;
    }



    constructor(private logueoService: LoginService, private cookieService: CookieService,
                private spinner: NgxSpinnerService) {
        /*this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];*/
    }

    ngOnInit() {
        this.txtEmail = this.cookieService.get('email');
        this.obtenerCharlas();
    }


    obtenerCharlas() {
        this.spinner.show();
        this.logueoService.getCharlasRegistradas(this.txtEmail).subscribe(charlaResponse => {
            charlaResponse.charlas.forEach(charlaElement => {
                const charla: Charla = {
                    strImagen: charlaElement.imagenCharlista,
                    strDescripcion: charlaElement.descripcionCharla,
                    strHora: charlaElement.horario.value,
                    strTitulo: charlaElement.tema,
                    strAula: charlaElement.aula.id,
                    strCharlista: charlaElement.charlista,
                    strDuracion: charlaElement.talkFormat,
                    numIdHorario: charlaElement.horario.id
                };
                this.charlas.push(charla);
            });
        }, (error) => {
            swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Error en carga, revise conexión a internet',
            });
        }, () => {
            this.charlas.sort(function (a, b) {
                if (Number(a.numIdHorario) > Number(b.numIdHorario)) {
                  return 1;
                }
                if (Number(a.numIdHorario) < Number(b.numIdHorario)) {
                  return -1;
                }
                // a must be equal to b
                return 0;
            });
            this.spinner.hide();
        });
    }

}
