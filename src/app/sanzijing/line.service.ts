import { Injectable } from '@angular/core';
import { SZJLines }     from './szj-line';
import { Logger } from '../logger.service';


@Injectable()

export class LineService {

  constructor(private logger : Logger) {}

  getLines() { 
    this.logger.log('获取行数据....');

    return SZJLines; 
  }
}
