import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';
import { map } from 'rxjs/operators/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showTab$?: Observable<boolean>;
  test: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(
    private observableMedia: ObservableMedia,
  ) {}

  ngOnInit() {
    this.showTab$ = this.observableMedia.asObservable().pipe(
      map(mediaChange => {
        return mediaChange.mqAlias === 'xs' ? true : false;
      }),
    );
  }
  onClickMe(val: boolean) {
    this.test.next(false);
  }
}

