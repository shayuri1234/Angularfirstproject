import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';



@NgModule({
  declarations: [TeamComponent],
  exports:[TeamComponent],
  imports: [
    CommonModule
  ]
})
export class CustomModule { }
