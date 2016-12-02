import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService } from '../../core/api.service';
import { SpinnerService } from '../../core/spinner.service';


@Component({
  selector: 'master',
  styleUrls: ['master.component.css'],
  templateUrl: 'master.component.html',
})
export class MasterComponent implements OnInit, OnDestroy {
  master;
  masterTitle = ['pid', 'name', 'socket', 'status'];
  feedback;
  settings;
  id;
  isShow: boolean = false;

  constructor(private apiService: APIService,
    private spinnerService: SpinnerService) { }

    getMaster(): void {
      this.apiService.getMaster().subscribe(master => this.master = master);
      }

    ngOnInit(): void {
      this.getMaster();
      this.id = setInterval(() => { this.getMaster(); }, 1000 * 10);
    }

    ngOnDestroy(): void {
      clearInterval(this.id);
    }

    killMaster() {
      this.apiService.killMaster().subscribe();
    }

    getSettings() {
      this.apiService.getSettings().subscribe(setting => this.settings = setting);
    }

    toggleSettings() {
      this.isShow = true;
      if (this.isShow) {
        this.getSettings()
      }
    }
}
