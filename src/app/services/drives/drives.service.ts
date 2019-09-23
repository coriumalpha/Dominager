import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Drive } from '@app/shared/models/storage/drive';
import { DRIVES } from './mock-drives';

@Injectable({
  providedIn: 'root'
})
export class DrivesService {
  constructor() {}

  public getDrives(): Observable<Drive[]> {
    return of(DRIVES);
  }
}
