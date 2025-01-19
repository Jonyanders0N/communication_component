import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DefaultService {

  obs: Subject<string> = new Subject<string>();

  updateValue(value: string) {
    this.obs.next(value);
  }
}
