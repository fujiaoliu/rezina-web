import { Component, OnInit, OnDestroy,  ViewContainerRef  } from '@angular/core';
import { APIService } from '../../core/api.service';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'typology',
  styleUrls: ['typology.component.css'],
  templateUrl: 'typology.component.html',
})
export class TypologyComponent implements OnInit {
  typology;
	typosTitle = ["name", "start time", "interval", "status", "action"];
  feedback;
  id;


	constructor(
    private apiService: APIService,
    private router: Router,
    public snackBar: MdSnackBar,
    public viewContainerRef: ViewContainerRef
  ) {}

	getTypology(): void {
		this.apiService.getTypology().subscribe(typology => this.typology = typology);
	}

	ngOnInit(): void {
		this.getTypology();
    this.id = setInterval(() => { this.getTypology(); }, 1000 * 8);
	}

  ngOnDestroy() {
    clearInterval(this.id);
  }


  gotoDetail(name: string): void {
    this.router.navigate(['/typology', name]);
  }

  snackOpen(msg, action_mes, t=2000) {
    let config = new MdSnackBarConfig(this.viewContainerRef);
    let simpleSnackBarRef = this.snackBar.open(msg, action_mes, config);
    setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), t);
  }

  typoAction(name:string, action:string) {
    this.apiService.typoAction(name, {'action': action}).subscribe(feedback => this.feedback = feedback,
       () => console.log('error'), ()=>this.snackOpen(this.feedback.message, 'OK'));
  }
}
