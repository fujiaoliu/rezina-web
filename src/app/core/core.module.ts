import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './api.service';
import { SpinnerService } from './spinner.service';
import { SidenavService } from './sidenav.service';

@NgModule({
  providers: [ APIService, SpinnerService, SidenavService ]
})
export class CoreModule {}
