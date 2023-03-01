import {Component, OnInit} from '@angular/core';
import {Observable, shareReplay} from "rxjs";
import {PowerService} from "../../services/power.service";
import {MessageCodeService} from "../../services/message-code.service";
import {Inventory, VendingItem} from "../../models";
import {VendingMachineService} from "../../services/vending-machine.service";

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss']
})
export class VendingMachineComponent implements OnInit {

  power$: Observable<boolean> = this.powerService.isMachineOn$.pipe(shareReplay({refCount: true, bufferSize: 1}))
  vendingInventory$: Observable<Inventory> = this.vendingMachineService.getVendingItems();
  selectedItem: VendingItem;

  constructor(private powerService: PowerService,
              private messageCode: MessageCodeService,
              private vendingMachineService: VendingMachineService) {
  }

  ngOnInit(): void {
  }

  getFirstDisplayMessage(power: boolean | false) {
    return this.messageCode.fromCode(power ? 'ON' : 'OFF');
  }
}
