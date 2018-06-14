import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shared/core/base-api';


@Injectable()
export class BillService extends BaseApi {

  constructor(public http: Http) {
    super(http);
  }

  // getBill(): Observable<Bill> {
  //   return this.http.get('http://localhost:3000/bill')
  //     .map((response: Response) => {
  //       return response.json();
  //     });
  // }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }

  getCurrency() {
    return this.http.get('http://data.fixer.io/api/latest?access_key=0b3ad0cb845c32789033fc9a4fd2d9bc&symbols=RUB,USD,UAH&format=1')
      .map((response: Response) => {
        return response.json();
      });
  }

}
