import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {NgForm} from '@angular/forms';
import {WfmEvent} from '../../shared/models/event.model';
import * as moment from 'moment';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Input() categories: Category[] = [];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let {type, amount, category, description} = form.value;
    if (amount < 0) {
      amount *= -1;
    }

    console.log(form.value);

    const event = new WfmEvent(type, amount, +category, moment().format('DD.MM.YYYY HH.mm.ss'), description);
    console.log(event);
  }
}
