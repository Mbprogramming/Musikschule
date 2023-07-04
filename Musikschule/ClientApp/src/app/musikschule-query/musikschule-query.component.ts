import { Component } from '@angular/core';
import { Musikschule } from '../models/musikschule';
import { MusikschuleService } from '../services/musikschule.service';

@Component({
  selector: 'app-musikschule-query',
  templateUrl: './musikschule-query.component.html',
  styleUrls: ['./musikschule-query.component.css']
})
export class MusikschuleQueryComponent {
  musikschulen: Musikschule[] = [];
  
  refresh() {
    this._service.getMusiklschulen().subscribe(musikschulen => {
      this.musikschulen = musikschulen;
    });
  }

  constructor(private readonly _service: MusikschuleService) {
    this.refresh();
  }
}
