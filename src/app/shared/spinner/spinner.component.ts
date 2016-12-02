import { Component, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../core/spinner.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css'],
})

export class SpinnerComponent implements OnDestroy {
	isLoading: boolean = false;
	subscription: Subscription;

	constructor(private spinnerService: SpinnerService) {
		this.subscription = this.spinnerService.loadingObs$.subscribe(isLoading => this.isLoading = isLoading);
	}

	ngOnDestroy() {
		console.log('s com destory');
		this.subscription.unsubscribe();
	}
}
