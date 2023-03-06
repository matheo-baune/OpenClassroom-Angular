import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  snapText!: string;


  ngOnInit() {
    this.snapText = 'Oh Snap!'
  }

  onAddSnap(){
    if(this.snapText === 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.snapText = 'Oops, un Snap!';
    }else{
      this.faceSnap.snaps--;
      this.snapText = 'Oh Snap!';
    }
  }
}
