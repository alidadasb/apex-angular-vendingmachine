import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PowerService} from "../../services/power.service";

@Component({
  selector: 'power-button',
  templateUrl: './power-button.component.html',
  styleUrls: ['./power-button.component.scss']
})
export class PowerButtonComponent implements OnInit, OnDestroy {
  power: boolean = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    public powerService: PowerService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.powerService.isMachineOn$.subscribe(
        (isMachineOn: any) => {
          this.power = isMachineOn;
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
