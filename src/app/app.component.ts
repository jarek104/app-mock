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

  showDocumentTab$?: Observable<boolean>;
  test: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(
    private observableMedia: ObservableMedia,
  ) {}

  ngOnInit() {
    // this.test.next('true');
    this.showDocumentTab$ = this.test.asObservable();
    // this.showDocumentTab$ = this.observableMedia.asObservable().pipe(
    //   map(mediaChange => {
    //     return mediaChange.mqAlias === 'xs' ? 'true' : 'false';
    //   }),
    // );
  }
  onClickMe(val: boolean) {
    this.test.next(false);
  }
}

