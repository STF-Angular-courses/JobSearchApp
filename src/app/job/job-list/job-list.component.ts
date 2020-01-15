import { Component, EventEmitter, Output } from '@angular/core';
import { JobService } from '../common/servise/job.service';
import { JobModel } from '../common/model/job.model';
import { JobModule } from '../job.module';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  jobs: any;

  constructor(private jobService: JobService) {
    this.jobs = this.jobService.jobs;
  }

  @Output() showJob = new EventEmitter<number>();

  processJobById(id: number): void {
    this.showJob.emit(id);
  }

}
