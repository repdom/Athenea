import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CharlaComponent } from './charla/charla.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '../forms/forms.module';
import { CronogramaModule } from './cronograma/cronograma.module';
import { CronogramaComponent } from './cronograma/cronograma.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { EntradaComponent } from './entrada/entrada.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        TranslateModule,
        FormsModule,
        CronogramaModule,
        MatExpansionModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [DashboardComponent, CharlaComponent, CronogramaComponent, EntradaComponent],
    providers: [
        LoginService
    ]
})
export class DashboardModule {}
