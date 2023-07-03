import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musikschule } from '../models/musikschule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusikschuleService {

  private _baseUrl = 'http://localhost:5185/api/Musikschule';

  constructor(private readonly _client: HttpClient) { 
    if(environment.production) {
      this._baseUrl = '/api/Musikschule';
    }
  }

  getMusiklschulen(): Observable<Musikschule[]> {
    return this._client.get<Musikschule[]>(this._baseUrl);
  } 

  getMusikschule(id: string): Observable<Musikschule> {
    return this._client.get<Musikschule>(this._baseUrl + '/' + id);
  }

  addMusikschule(name: string, adresse: string) {
    let item = new Musikschule();
    item.name = name;
    item.adresse = adresse;
    item.id = "00000000-0000-0000-0000-000000000000";
    return this._client.post(this._baseUrl, item);
  }

  editMusikschule(id: string, name: string, adresse: string) {
    let item = new Musikschule();
    item.name = name;
    item.adresse = adresse;
    item.id = id;
    return this._client.put(this._baseUrl + '/' + id, item);
  }

  deleteMusikschule(id: string) {
    return this._client.delete(this._baseUrl + '/' + id);
  }
}
