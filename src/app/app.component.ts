import { Component } from '@angular/core';
import { JobService } from '../app/job/common/servise/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JobSearchApp';

  constructor(private jobService: JobService) { }
}
