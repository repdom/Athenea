import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { LogueoService } from './services/logueo.service';
import { CronogramaComponent } from './dashboard/cronograma/cronograma.component';
import { CronogramaModule } from './dashboard/cronograma/cronograma.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        DashboardModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent],
    providers: [
        LogueoService
    ]
})
export class LayoutModule {}
