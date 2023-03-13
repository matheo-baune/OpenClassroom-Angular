import {Injectable, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {concatMap, map, Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService implements OnInit{
    constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }
  likeFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap))
    );
  }

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap>{
      return this.getAllFaceSnaps().pipe(
        map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
        map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length-1]),
        map(lastFacesnap => ({
          ...formValue,
          snaps: 0,
          createdDate : new Date(),
          id: lastFacesnap.id+1
        })),
        tap(tmp => console.log(tmp)),
        concatMap(newFacesnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps/`,newFacesnap))
      );
  }
}
