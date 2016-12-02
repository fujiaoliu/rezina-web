import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { APIService } from '../../core/api.service';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'worker',
  styleUrls: ['worker.component.css'],
  templateUrl: 'worker.component.html',
  providers: [MdSnackBar]
})

export class WorkerComponent implements OnInit {
  workers;
	workerTitle = ["ip", "workload", "status", "action"] ;
  id;
  feedback;

	constructor(
    private apiService: APIService,
    private router: Router,
    public snackBar: MdSnackBar,
    public viewContainerRef: ViewContainerRef
  ) {}

	getWorker(): void {
		this.apiService.getWorker().subscribe(workers => this.workers = workers);
	}

	ngOnInit(): void {
		this.getWorker();
    this.id = setInterval(() => { this.getWorker(); }, 1000 * 9);
	}
  ngOnDestroy() {
    clearInterval(this.id);
  }

  snackOpen(msg, action_mes, t=2000) {
    let config = new MdSnackBarConfig(this.viewContainerRef);
    let simpleSnackBarRef = this.snackBar.open(msg, action_mes, config);
    setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), t);
  }

  gotoDetail(ip: string): void {
    this.router.navigate(['/worker', ip]);
  }

  killWorker() {
    this.apiService.killWorker().subscribe(feedback => this.feedback = feedback,
    ()=>console.log('kill worker error'), ()=>this.snackOpen(this.feedback.message, 'OK'));
  }

  killOneWorker(ip:string) {
    this.apiService.killOneWorker(ip).subscribe(feedback => this.feedback = feedback,
    ()=>console.log('kill worker error'), ()=>this.snackOpen(this.feedback.message, 'OK'));
  }
}
