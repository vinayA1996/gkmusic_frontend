import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SharedModule } from '../shared/shared.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeRoutingModule } from './home.routing';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    HomeLayoutComponent,
     LandingpageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CommonComponentsModule
  ],
  exports:[
    HomeLayoutComponent
  ]
})
export class HomeModule { }
