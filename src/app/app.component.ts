import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showDocumentTab$?: Observable<'true' | 'false'>;
  constructor(
    private observableMedia: ObservableMedia,
  ) {}

  ngOnInit() {

    this.showDocumentTab$ = this.observableMedia.asObservable().pipe(
      map(mediaChange => {
        return mediaChange.mqAlias === 'xs' ? 'true' : 'false';
      }),
    );
  }
}

