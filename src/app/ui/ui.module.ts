import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';

import { MasterComponent } from './master/master.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerDetailComponent } from './worker/worker-detail.component';
import { TypologyComponent } from './typology/typology.component';
import { TypologyDetailComponent } from './typology/typology-detail.component';
import { SummaryComponent } from './summary/summary.component';

import { UIRoutingModule } from './ui-routing.module';


@NgModule({
	imports: [ MaterialModule.forRoot(), UIRoutingModule, SharedModule ],
	declarations: [ MasterComponent,
	                WorkerComponent,
								  WorkerDetailComponent,
							 	  TypologyComponent,
								  TypologyDetailComponent,
                  SummaryComponent ],
	exports: [ MasterComponent,
	           WorkerComponent,
					   WorkerDetailComponent,
				 	   TypologyComponent,
					   TypologyDetailComponent,
             SummaryComponent ],
})
export class UIModule { }
