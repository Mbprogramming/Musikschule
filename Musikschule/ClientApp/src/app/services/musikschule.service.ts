import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musikschule } from '../models/musikschule';

@Injectable({
  providedIn: 'root'
})
export class MusikschuleService {

  constructor(private readonly _client: HttpClient) { }

  getMusiklschulen(): Observable<Musikschule[]> {
    return this._client.get<Musikschule[]>('http://localhost:5185/api/Musikschule');
  } 
}
