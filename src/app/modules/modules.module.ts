import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { OrganizationTreeComponent } from './organization-tree/organization-tree.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OrganizationTreeComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    HttpClientModule,
    NgxOrgChartModule
  ]
})
export class ModulesModule { }
