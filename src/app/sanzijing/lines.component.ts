import { Component } from '@angular/core';
import { LineService } from './line.service';

@Component({
  selector: 'my-lines',
  providers: [LineService],
  template: `
  <h2>三字经</h2>
  <line-list></line-list>
  `
})
export class LinesComponent { }
