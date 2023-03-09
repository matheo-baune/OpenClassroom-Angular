import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  snapText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  ngOnInit() {
    this.snapText = 'Oh Snap!'
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
