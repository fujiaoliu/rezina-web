import { Component, OnInit } from '@angular/core';
import { APIService } from '../../core/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'worker-detail',
  styleUrls: ['worker-detail.component.css'],
  templateUrl: 'worker-detail.component.html',
})

export class WorkerDetailComponent implements OnInit {
  worker;
  ip;
  procsTitle = ['#', 'pid', 'name', 'status'];

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

	getWorkerDetail(ip: string): void {
		this.apiService.getWorkerDetail(ip).subscribe(worker => this.worker = worker,
    error=>console.log(error), ()=>console.log(this.worker));
	}

	ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
    this.ip = params['ip'];
		this.getWorkerDetail(this.ip);
    });
  }

  goBack(): void {
    this.location.back();
	}
}
