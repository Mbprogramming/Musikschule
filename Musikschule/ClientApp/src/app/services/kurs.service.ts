import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kurse } from '../models/kurse';

@Injectable({
  providedIn: 'root'
})
export class KursService {
  private _baseUrl = 'http://localhost:5185/api/Kurs';

  constructor(private readonly _client: HttpClient) { 
    if(environment.production) {
      this._baseUrl = 'http://musikschule.softwareentwicklung-ehrke-bach.de/api/Kurs';
    }
  }

  getKurse(): Observable<Kurse[]> {
    return this._client.get<Kurse[]>(this._baseUrl);
  } 

  addKurs(musikschuleId: string, name: string, inhalt: string, start: Date, dauer: string, teilnehmer: number, belegt: number) {
    let item = new Kurse();
    item.musikSchuleId = musikschuleId;
    item.name = name;
    item.inhalt = inhalt; 
    item.start = new Date(start); 
    item.dauer = "01:15:00";
    item.teilnehmerGesamt = teilnehmer;
    item.teilnehmerBelegt = belegt;
    item.id = "00000000-0000-0000-0000-000000000000";

    return this._client.post(this._baseUrl, item);
  }
}
