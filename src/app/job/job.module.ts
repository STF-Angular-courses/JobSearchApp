import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from './job-item/job-item/job-item.component';
import { JoblistComponent } from './job-list/joblist/joblist.component';
import { JobListComponent } from './job-list/job-list/job-list.component';



@NgModule({
  declarations: [JobItemComponent, JoblistComponent, JobListComponent],
  imports: [
    CommonModule
  ]
})
export class JobModule { }
