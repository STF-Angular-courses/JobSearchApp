import { Injectable } from '@angular/core';
import { JobModel } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  public jobs: JobModel[] = [
    {
      id: 1,
      name: 'job 1',
      date: new Date(),
      rate: 5
    },
    {
      id: 2,
      name: 'job 2',
      date: new Date(),
      rate: 5
    },
    {
      id: 3,
      name: 'job 3',
      date: new Date(),
      rate: 5
    }
  ];

  add(): void {
    const lastId = this.jobs[this.jobs.length - 1].id;
    const newId = lastId + 1;

    const newJob: JobModel = {
      id: newId,
      name: 'new job',
      rate: 0,
      date: new Date()
    };
  }

  remove(id: number): void {
    let delItemIndex = this.jobs.findIndex((book) => book.id === id);
    this.jobs.splice(delItemIndex, 1);
  }
}
