import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from './job-item/job-item.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobService } from './common/servise/job.service';
// import { JobShowComponent } from './job-show/job-show.component';



@NgModule({
  declarations: [
    JobItemComponent,
    JobListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JobListComponent
  ],
  providers:[
    JobService
  ]
})
export class JobModule { }
