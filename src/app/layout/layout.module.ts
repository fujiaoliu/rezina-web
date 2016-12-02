import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftSideNavComponent } from './navbar/leftsidenav.component';
import { RightSideNavComponent } from './navbar/rightsidenav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
	imports: [ MaterialModule.forRoot(), SharedModule, LayoutRoutingModule ],
	declarations: [ HeaderComponent,
					BreadCrumbsComponent,
					LeftSideNavComponent,
					RightSideNavComponent,
					FooterComponent ],
	exports: [ HeaderComponent,
							BreadCrumbsComponent,
	           LeftSideNavComponent,
	           RightSideNavComponent,
	           FooterComponent ]
})
export class LayoutModule { }
