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
import { KeywordsComponent } from './keywords/keywords.component';
import { ActionsComponent } from './actions/actions.component';
import { MatIconModule } from '@angular/material/icon';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    KeywordsComponent,
    ActionsComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    SplitPaneModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
