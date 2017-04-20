import { Component }   from '@angular/core';

import { SZJ } from './sanzijing';
import { LineService } from './line.service';

@Component({
  selector: 'line-list',
  template: `
  <table class="table table-hover">
  <tr *ngFor="let line of lines">
    <td>{{line.line}}</td>
  </tr>
  </table>
  `
})
export class LineListComponent {
  lines: SZJ[];

  constructor(linesServer : LineService){
    this.lines = linesServer.getLines();
  }
}
