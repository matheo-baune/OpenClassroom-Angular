import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit, OnDestroy{
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;
  constructor(private faceSnapsService: FaceSnapsService) { }
  ngOnInit() {
    this.destroy$ = new Subject<boolean>();

    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
