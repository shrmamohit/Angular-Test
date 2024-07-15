import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CustomDateHeaderComponent } from './custom-date-header/custom-date-header.component';

@NgModule({
  declarations: [HeaderComponent, CustomDateHeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent,CustomDateHeaderComponent],
})
export class SharedModule {}
