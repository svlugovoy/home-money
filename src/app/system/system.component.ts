import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeStateTrigger} from '../shared/animations/fade.animation';

@Component({
  selector: 'wfm-system',
  templateUrl: './system.component.html',
  animations: [fadeStateTrigger]
})
export class SystemComponent implements OnInit {

  @HostBinding('@fade') perm = true;

  constructor() {}

  ngOnInit(): void {}

}
