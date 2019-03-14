import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainBrotherComponent } from './main/main-brother/main-brother.component';
import { MainBrother2Component } from './main/main-brother2/main-brother2.component';
import { SharedService } from './main/shared.service';

@NgModule({
  declarations: [MainComponent, MainBrotherComponent, MainBrother2Component],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    SharedModule
  ],
  providers: [SharedService]
})
export class MainModule { }
