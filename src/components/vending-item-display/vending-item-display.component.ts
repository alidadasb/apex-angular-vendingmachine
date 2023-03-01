import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Inventory, VendingItem} from "../../models";


@Component({
  selector: 'vending-item-display[inventory]',
  templateUrl: './vending-item-display.component.html',
  styleUrls: ['./vending-item-display.component.scss']
})
export class VendingItemDisplayComponent implements OnInit {
  @Input() inventory: Inventory = new Inventory([]);

  private _selectedItem: VendingItem = null

  @Input() set selectedItem(value: VendingItem | null) {
    this._selectedItem = value;
    this.selectedItemChange.emit(value);
  };

  get selectedItem() {
    return this._selectedItem;
  }

  @Output() selectedItemChange: EventEmitter<VendingItem> = new EventEmitter<VendingItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  forward = () => {
    const currentIndex = this.inventory.items.indexOf(this.selectedItem);
    const nextIndex = currentIndex >= this.inventory.items.length - 1 ? 0 : currentIndex + 1;
    this.selectedItemChange.emit(this.inventory.items[nextIndex])
  }

  backward = () => {
    const currentIndex = this.inventory.items.indexOf(this.selectedItem);
    const nextIndex = currentIndex <= 0 ? this.inventory.items.length - 1 : currentIndex - 1;
    this.selectedItemChange.emit(this.inventory.items[nextIndex]);
  }

  ngOnDestroy() {
  }

  pay() {
    console.log('paid');
  }

  cancel() {
    this._selectedItem = null;
  }
}
