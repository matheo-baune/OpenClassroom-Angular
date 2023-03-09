import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  snapText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.snapText = 'Oh Snap!'
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onAddSnap(){
    if(this.snapText === 'Oh Snap!'){
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id,'snap');
      this.snapText = 'Oops, un Snap!';
    }else{
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id,'unsnap');
      this.snapText = 'Oh Snap!';
    }
  }
}
