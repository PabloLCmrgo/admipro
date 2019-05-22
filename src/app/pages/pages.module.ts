import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES ],
    exports: [
        DashboardComponent,  // Se exportan ya que se trabaja con ellas en otros componentes de diferentes niveles.
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    providers: [],
})
export class PagesModule {}