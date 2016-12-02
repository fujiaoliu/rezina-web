import { Component, Input } from '@angular/core';

@Component({
  selector: 'left-side-nav',
  styleUrls:['nav.component.css'],
  templateUrl: 'leftsidenav.component.html'

})

export class LeftSideNavComponent { 
	@Input() leftnav;
}
