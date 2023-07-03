import { Component } from '@angular/core';
import { MusikschuleService } from '../services/musikschule.service';
import { Musikschule } from '../models/musikschule';

@Component({
  selector: 'app-musikschule-ueberblick',
  templateUrl: './musikschule-ueberblick.component.html',
  styleUrls: ['./musikschule-ueberblick.component.css']
})
export class MusikschuleUeberblickComponent {
  musikschulen: Musikschule[] = [];
  
  constructor(private readonly _service: MusikschuleService) {
    this._service.getMusiklschulen().subscribe(musikschulen => {
      this.musikschulen = musikschulen;
    });
  }
}
