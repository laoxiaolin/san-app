import { Component } from '@angular/core';
import { LineService } from './line.service';

@Component({
  selector: 'szj-lines',
  providers: [LineService],
  templateUrl: './lines.component.html'
})
export class LinesComponent { }
