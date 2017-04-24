import { Component } from '@angular/core';
import * as http from 'http';

@Component({
  selector: 'my-app',
  template: `<h1>环境设置完成 {{name}}</h1>`
})
export class AppComponent { name = 'Angular1'; }
