import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyButtonComponent } from './my-button/my-button.component';

@NgModule({
  declarations: [MyLibComponent, MyButtonComponent],
  imports: [
  ],
  exports: [MyLibComponent, MyButtonComponent]
})
export class MyLibModule { }
