import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageRecComponent } from './image-rec/image-rec.component';

const routes: Routes = [
  {path: 'image-rec', component:ImageRecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
