import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { APIService } from '../../core/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'typology-detail',
  styleUrls: ['typology-detail.component.css'],
  templateUrl: 'typology-detail.component.html',
})

export class TypologyDetailComponent implements OnInit {
  typoDetail;
  name: string;
  titles = ['pid', 'name', 'udf'];
  value = 1;
  feedback;

  constructor(
    private apiService: APIService,
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MdSnackBar,
    public viewContainerRef: ViewContainerRef
  ) {}

	getTypologyDetail(name: string): void {
		this.apiService.getTypologyDetail(name).subscribe(typoDetail => this.typoDetail = typoDetail);
	}

	ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
    this.name = params['name'];
		this.getTypologyDetail(this.name);
    });
  }

  snackOpen(msg, action_mes, t=2000) {
    let config = new MdSnackBarConfig(this.viewContainerRef);
    let simpleSnackBarRef = this.snackBar.open(msg, action_mes, config);
    setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), t);
  }

  launchMore(name:string, value) {
    this.apiService.typoAction(name, {'action': 'launch_more', 'value': value}).subscribe(feedback => this.feedback = feedback,
       () => console.log('error'), ()=>this.snackOpen(this.feedback.message, 'OK'));
  }


  goBack(): void {
    this.location.back();
	}
}
