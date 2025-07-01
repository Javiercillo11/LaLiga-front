import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexModalFormComponent } from './components/index-modal-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    IndexModalFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IndexComponent,
    IndexModalFormComponent
  ]
})
export class IndexModule { }
