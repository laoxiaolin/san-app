import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LinesComponent }  from './sanzijing/lines.component';
import { LineListComponent }  from './sanzijing/line-list.component';
import { LineService }  from './sanzijing/line.service';
import { Logger }  from './logger.service';


@NgModule({
  imports:      [ 
    BrowserModule
  ],
  declarations: [ 
    AppComponent,
    LinesComponent,
    LineListComponent
  ],
  providers: [
     Logger,
     LineService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
