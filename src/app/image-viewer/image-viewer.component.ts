import { Component, OnInit } from '@angular/core';
import { DogImagesService } from '../dog-images.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  constructor(private dogService: DogImagesService) { }

  dogImageUrls$: Observable<String[]>;

  ngOnInit() {
    // this.dogImageUrls$ = this.dogService.getImages();
  }

}
