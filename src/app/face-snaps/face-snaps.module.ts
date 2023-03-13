import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { FaceSnapComponent } from "./components/face-snap/face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { ReactiveFormsModule} from "@angular/forms";
import {FaceSnapsRoutingModule} from "./face-snaps-routing.module";



@NgModule({
  declarations: [
    FaceSnapListComponent,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  exports: [
    FaceSnapListComponent,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ]
})
export class FaceSnapsModule { }
