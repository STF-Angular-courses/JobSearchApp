import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobModel } from '../common/model/job.model';
import { JobService } from '../common/servise/job.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent {

  constructor(private jobService: JobService) { }

  @Input() job: JobModel;

  @Output() giveId = new EventEmitter<number>();

  openBook(id: number) {
    console.log(id);
    this.giveId.emit(id);
  }
}
