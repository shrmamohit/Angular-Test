import { Component, Inject, LOCALE_ID } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendar, MatCalendarHeader } from '@angular/material/datepicker';

@Component({
  selector: 'app-custom-date-header',
  templateUrl: './custom-date-header.component.html',
  styleUrl: './custom-date-header.component.scss',
})
export class CustomDateHeaderComponent {
  constructor(
    @Inject(LOCALE_ID) private _locale: string,
    public dateAdapter: DateAdapter<any>,
    private calendar: MatCalendar<any>
  ) {}
  selectNextMonday() {
    const today = this.dateAdapter.today();
    const nextMonday = this.getNextDayOfWeek(today, 1); // 1: Monday
    this.calendar.currentView = 'month'; // switch to month view
    this.calendar.activeDate = nextMonday;
  }

  selectNextTuesday() {
    const today = this.dateAdapter.today();
    const nextTuesday = this.getNextDayOfWeek(today, 2); // 2: Tuesday
    this.calendar.currentView = 'month'; // switch to month view
    console.log(nextTuesday);
    this.calendar.activeDate = nextTuesday;
  }

  private getNextDayOfWeek(date: any, dayOfWeek: number): any {
    const resultDate = this.dateAdapter.addCalendarDays(
      date,
      (dayOfWeek + 7) % 7
    );
    console.log(resultDate);
    return resultDate;
  }
}
