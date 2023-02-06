import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../projects/utils/src/lib/header/header.component';
import {RouterModule} from "@angular/router";

const HEADER_COMPONENT = [HeaderComponent]

@NgModule({
  declarations: [
    ...HEADER_COMPONENT
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...HEADER_COMPONENT]
})
export class CoreModule { }
