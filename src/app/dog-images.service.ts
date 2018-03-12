import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class DogImagesService {

  constructor(
    private http: HttpClient
  ) { }

  // getImages(): Observable<any> {
  //   return new Observable((observer: Subscriber<any>) => {
  //       let objectUrl: string = null;

  //       this.http
  //           .get('https://dog.ceo/api/breed/schnauzer/giant/images', {
  //               responseType: 'blob'
  //           })
  //           .subscribe(m => {
  //               objectUrl = URL.createObjectURL(m);
  //               observer.next(objectUrl);
  //           });

  //       return () => {
  //           if (objectUrl) {
  //               URL.revokeObjectURL(objectUrl);
  //               objectUrl = null;
  //           }
  //       };
  //   });
  // }
}
