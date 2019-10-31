import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorService } from './angular-editor.service';
import { AngularEditorComponent } from './angular-editor.component';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
     AngularEditorComponent,
     AngularEditorToolbarComponent
  ],  
  imports: [
      CommonModule,
      FormsModule, 
      ReactiveFormsModule,
      HttpClientModule,
      FlexLayoutModule
  ],
  exports: [
      AngularEditorComponent,
      CommonModule, 
      FormsModule, 
      ReactiveFormsModule,
      HttpClientModule,
      FlexLayoutModule
   ],
   providers: [
      AngularEditorService
   ]

})
export class AngularEditorModule { }
