import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VendingMachineComponent} from './vending-machine.component';
import {PowerService} from "../../services/power.service";
import {Inventory} from "../../models";
import {VendingMachineService} from "../../services/vending-machine.service";
import {Observable, of} from "rxjs";
import {AppModule} from "../app.module";


describe('VendingMachineComponent', () => {
  let component: VendingMachineComponent;
  let powerService: PowerService;
  let fixture: ComponentFixture<VendingMachineComponent>;
  let vendingMachineServiceStub: Partial<VendingMachineService>

  vendingMachineServiceStub = {
    getVendingItems: (): Observable<Inventory> => {
      return of(new Inventory([]))
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendingMachineComponent],
      imports:[AppModule],
      providers: [PowerService, {provide: VendingMachineService, useValue: vendingMachineServiceStub}],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VendingMachineComponent);
    component = fixture.componentInstance;
    powerService = fixture.debugElement.injector.get(PowerService);

    fixture.detectChanges();
  });

  it('no item should be selected', () => {
    expect(component.selectedItem).toBeUndefined();
  });
});
