import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { SellStatsComponent } from './sell-stats/sell-stats.component';
import { ProductStatsComponent } from './product-stats/product-stats.component';


@NgModule({
  declarations: [
    StatsComponent,
    UserStatsComponent,
    SellStatsComponent,
    ProductStatsComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
