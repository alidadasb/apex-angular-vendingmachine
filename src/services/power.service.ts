import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  private _isMachineOn = new BehaviorSubject(false);
  isMachineOn$ = this._isMachineOn.asObservable();

  constructor() { }

  setMachine = (power: boolean): void => {
    this._isMachineOn.next(power);
  }

}
