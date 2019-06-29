import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronogramaComponent } from './cronograma.component';
import { DashboardModule } from '../dashboard.module';
import { LoginService } from '../../../services/login.service';
import { MatGridListModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class CronogramaModule { }
