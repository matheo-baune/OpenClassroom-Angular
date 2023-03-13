import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap$!: Observable<FaceSnap>;
  snapText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.snapText = 'Oh Snap!'
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onAddSnap(facesnapId: number){
    if(this.snapText === 'Oh Snap!'){
      this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(facesnapId,'snap').pipe(
        tap(() =>this.snapText = 'Oops, un Snap!')
      );

    }else{
      this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(facesnapId,'unsnap').pipe(
        tap(() => this.snapText = 'Oh Snap!')
      );

    }
  }
}
