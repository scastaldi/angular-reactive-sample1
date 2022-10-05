import { Component, VERSION } from '@angular/core';
import { from, interval, Observable, of, tap, take, map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // step 4 - replace hard-coded values with variable
  data = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    // // step 1 - simple auto subscribe
    // long version
    // const numericList$ = new Observable<number>((numericListSubscriber) => {
    //   numericListSubscriber.next(1);
    //   numericListSubscriber.next(2);
    //   numericListSubscriber.next(3);
    //   numericListSubscriber.next(4);
    //   numericListSubscriber.complete();
    // });
    // numericList$.subscribe((item) => {
    //   console.log(item);
    // });
    // // short version
    // of(1, 2, 3, 4).subscribe((item) => {
    //   console.log(item);
    // });
    // from([1, 2, 3, 4]).subscribe((item) => {
    //   console.log(item);
    // });
    //
    // // step 2 - handle next, error, complete
    // of(1, 2, 3, 4).subscribe({
    //   next: (item) => console.log(`resulting item... ${item}`),
    //   error: (item) => console.log(`error item... ${item}`),
    //   complete: () => console.log('complete!'),
    // });
    // from([1, 2, 3, 4]).subscribe({
    //   next: (item) => console.log(`resulting item... ${item}`),
    //   error: (item) => console.log(`error item... ${item}`),
    //   complete: () => console.log('complete!'),
    // });
    //
    // // step 3 - show the use of pipe with tap, map, take
    // from(this.data)
    //   .pipe(
    //     tap((item) => console.log(`tap ${item}`))
    //     // map((item) => item * 2),
    //     // take(3)
    //   )
    //   .subscribe((item) => {
    //     console.log(item);
    //   });
  }
}
