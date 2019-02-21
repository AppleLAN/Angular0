import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInformationComponent } from './user-information/user-information.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInformationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UserInformationComponent, ReactiveFormsModule]
})
export class SharedModule {}
