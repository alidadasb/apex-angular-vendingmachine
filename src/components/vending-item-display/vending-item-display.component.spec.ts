import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VendingItem} from "../../models";
import {VendingItemDisplayComponent} from "./vending-item-display.component";
import {AppModule} from "../app.module";


describe('VendingMachineComponent', () => {
  let component: VendingItemDisplayComponent;
  let fixture: ComponentFixture<VendingItemDisplayComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendingItemDisplayComponent],
      imports: [AppModule],
      providers: [],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VendingItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set the selected item to null when cancel is clicked', (() => {
    spyOn(component.selectedItemChange, 'emit');
    let vendingItem = new VendingItem(1, 'testCoke', 1.1, 10);

    expect(component.selectedItem).toBeFalsy();
    component.selectedItem = vendingItem;

    component.cancel();

    expect(component.selectedItemChange.emit).toHaveBeenCalledOnceWith(vendingItem);
    expect(component.selectedItem).toBeFalsy();
  }));

});
