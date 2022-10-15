import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { holidaysActions } from '../+state/holidays.actions';
import { fromHolidays } from '../+state/holidays.selectors';
import { HolidayCardComponent } from '../holiday-card/holiday-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
  standalone: true,
  imports: [HolidayCardComponent, NgForOf, AsyncPipe]
})
export class HolidaysComponent implements OnInit {
  holidays$ = this.store.select(fromHolidays.get);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(holidaysActions.findHolidays());
  }
}
