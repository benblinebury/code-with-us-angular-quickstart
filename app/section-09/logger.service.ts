import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  // What else might we do?
  log(message: string) {
    console.log(message);
  }
}
