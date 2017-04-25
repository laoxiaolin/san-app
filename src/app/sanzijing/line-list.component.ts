import { Component }   from '@angular/core';
import { SZJ } from './sanzijing';
import { LineService } from './line.service';


@Component({
  selector: 'line-list',
  templateUrl: './line-list.component.html'
})
export class LineListComponent {
  lines: SZJ[];

  constructor(linesServer : LineService){
    this.lines = linesServer.getLines();
  }
}
