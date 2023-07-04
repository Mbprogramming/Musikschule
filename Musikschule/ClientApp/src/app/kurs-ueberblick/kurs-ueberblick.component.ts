import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Musikschule } from '../models/musikschule';
import { KursService } from '../services/kurs.service';
import { MusikschuleService } from '../services/musikschule.service';
import { Kurse } from '../models/kurse';

@Component({
  selector: 'app-kurs-ueberblick',
  templateUrl: './kurs-ueberblick.component.html',
  styleUrls: ['./kurs-ueberblick.component.css'],
})
export class KursUeberblickComponent {
  musikschuleId: string | null = null;
  musikschule: Musikschule | null = null;
  kurse: Kurse[] = [];

  constructor(
    private readonly _kursService: KursService,
    private readonly _musikschuleService: MusikschuleService,
    private _router: Router,
    private route: ActivatedRoute
  ) {
    let musikSchuleId = this.route.snapshot.paramMap.get('musikschuleId');
    if (musikSchuleId !== null) {
      this.musikschuleId = musikSchuleId;
      this._musikschuleService
        .getMusikschule(musikSchuleId)
        .subscribe((schule) => {
          this.musikschule = schule;
        });
    }
    this.refresh();
  }

  refresh() {
    if (this.musikschuleId !== null) {
      this._kursService
        .getKurseFürSchule(this.musikschuleId)
        .subscribe((kurse) => {
          this.kurse = kurse;
        });
    }
  }

  edit(id: string | undefined | null){}

  delete(id: string | undefined | null){}
}
