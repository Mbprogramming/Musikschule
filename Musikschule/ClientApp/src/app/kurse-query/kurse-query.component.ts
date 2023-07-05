import { Component } from '@angular/core';
import { MusikschuleService } from '../services/musikschule.service';
import { KursService } from '../services/kurs.service';
import { Kurse } from '../models/kurse';

@Component({
  selector: 'app-kurse-query',
  templateUrl: './kurse-query.component.html',
  styleUrls: ['./kurse-query.component.css']
})
export class KurseQueryComponent {
  kurse: Kurse[] = [];

  constructor(
    private readonly _kursService: KursService,
    private readonly _musikschuleService: MusikschuleService
  ) {
    this.refresh();
  }

  refresh() {
      this._kursService
        .getKurse()
        .subscribe((kurse) => {
          this.kurse = kurse;
        });
    }
}
