import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-bar',
  styleUrls: ['header.component.css'],
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
	@Input() leftnav;
	@Input() rightnav;


	constructor(private router: Router) {}

  isDarkTheme: boolean = true;
  title:string = "Rezina";
  links = ['summary', 'master', 'worker', 'typology'];

  navigateTo(link:string) {
    this.router.navigate(['/'+link]);
  }

  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
