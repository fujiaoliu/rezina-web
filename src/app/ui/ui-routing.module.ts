import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerDetailComponent } from './worker/worker-detail.component';
import { TypologyComponent } from './typology/typology.component';
import { TypologyDetailComponent } from './typology/typology-detail.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'master', component: MasterComponent },
  { path: 'worker', component: WorkerComponent },
  { path: 'worker/:ip', component: WorkerDetailComponent },
  { path: 'typology', component: TypologyComponent },
  { path: 'typology/:name', component: TypologyDetailComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule {}
