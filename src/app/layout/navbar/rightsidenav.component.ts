import { Component, Input } from '@angular/core';

@Component({
  selector: 'right-side-nav',
  styleUrls:['nav.component.css'],
  templateUrl: 'rightsidenav.component.html'

})

export class RightSideNavComponent {
	@Input() rightnav;
}
