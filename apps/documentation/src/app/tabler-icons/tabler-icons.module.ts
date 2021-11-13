import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerIconsRoutingModule } from './tabler-icons-routing.module';
import { TablerIconsComponent } from './tabler-icons.component';
import { NgIconsModule } from '@ng-icons/core';
import * as tablerIcons from '@ng-icons/tabler-icons';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TablerIconsComponent],
  imports: [
    CommonModule,
    TablerIconsRoutingModule,
    NgIconsModule.withIcons(tablerIcons),
    SharedModule,
  ],
})
export class TablerIconsModule {}
