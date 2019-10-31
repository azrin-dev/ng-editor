import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { AngularEditorComponent } from './tools/angular-editor/angular-editor.component';

const routes: Routes = [
   { path: '', component: NoteComponent },
   { path: 'editor', component: AngularEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
