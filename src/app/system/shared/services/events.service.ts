import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shared/core/base-api';
import {Category} from '../models/category.model';
import {WfmEvent} from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {

  constructor(public http: Http) {
    super(http);
  }

  addEvent(event: WfmEvent): Observable<WfmEvent> {
    return this.post('events', event);
  }

}
