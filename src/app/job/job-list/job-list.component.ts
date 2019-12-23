import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { JobService } from '../common/servise/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private jobService: JobService) { }

  @Output() showJob = new EventEmitter<number>();

  processBookById(id: number): void {
    this.showJob.emit(id);
  }

}
