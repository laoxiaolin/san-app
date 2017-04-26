import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { LineService } from './line.service';


@Component({
  selector: 'szj-lines',
  providers: [LineService],
  templateUrl: './lines.component.html'
})
export class LinesComponent {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "js/app/sanzijing.lines.component.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
