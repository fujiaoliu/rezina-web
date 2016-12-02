import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SpinnerComponent} from './spinner/spinner.component';
import {FilterPipe} from './pipes/filter.pipe';
import {IterKeysPipe} from './pipes/iter-keys.pipe';


@NgModule({
	imports: [CommonModule],
    declarations: [SpinnerComponent, FilterPipe, IterKeysPipe],
    exports:      [SpinnerComponent, FilterPipe, IterKeysPipe,
                   CommonModule, FormsModule]

})
export class SharedModule { }
