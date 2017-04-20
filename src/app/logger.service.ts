import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

  logs: string[] = []; // capture logs for testing

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  // let silentLogger = {
  //   logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  //   log: () => {}
  // };
}
