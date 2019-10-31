import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from './tools/angular-editor/angular-editor.module';

@NgModule({
  declarations: [
      AppComponent,
      NoteComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
