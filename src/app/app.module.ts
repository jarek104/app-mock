import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { DogImagesService } from './dog-images.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    SplitPaneModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DogImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
