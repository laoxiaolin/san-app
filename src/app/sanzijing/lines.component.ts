import { Component } from '@angular/core';
import { LineService } from './line.service';

@Component({
  selector: 'szj-lines',
  providers: [LineService],
  template: `
  <h2>三字经</h2>
  `
})
export class LinesComponent { }
