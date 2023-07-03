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

  addMusikschule(name: string, adresse: string) {
    let item = new Musikschule();
    item.name = name;
    item.adresse = adresse;
    item.id = "00000000-0000-0000-0000-000000000000";
    return this._client.post('http://localhost:5185/api/Musikschule', item);
  }

  deleteMusikschule(id: string) {
    return this._client.delete('http://localhost:5185/api/Musikschule/' + id);
  }
}
