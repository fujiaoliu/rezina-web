import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'breadcrumbs',
  styleUrls: ['breadcrumbs.component.css'],
  templateUrl: 'breadcrumbs.component.html',
})
export class BreadCrumbsComponent {
	constructor( private router: Router ) {}

  goto(partUri): void {
    let urls = this.router.url.split('/');
    let idx = urls.indexOf(partUri) + 1;
    let uri = urls.slice(0, idx).join('/')
    this.router.navigate([uri]);
  }
}
