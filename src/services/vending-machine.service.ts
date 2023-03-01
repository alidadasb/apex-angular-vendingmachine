import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, switchMap, take} from 'rxjs';
import {Inventory, VendingItem} from '../models';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {

  private _baseApi = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getVendingItems = (): Observable<Inventory> => {
    return this.httpClient.get<any[]>(this._baseApi + 'api/inventory/product')
      .pipe(
        switchMap(
          (items: VendingItem[]) => {
            console.log(items);
            return of(new Inventory(items))
          }
        ),
        take(1));
  }

  // getVendingItems = (): Observable<Inventory> => {
  //   //  Mock api
  //   return of([
  //     new VendingItem(1, "Cookie", 1.35, 2),
  //     new VendingItem(2, "Gum", 2.25, 4),
  //     new VendingItem(3, "Chocolate", 3.50, 3)])
  //     .pipe(
  //       switchMap(
  //         (items: VendingItem[]) => of(new Inventory(items))
  //       ),
  //       take(1)
  //     )
  // }

}
