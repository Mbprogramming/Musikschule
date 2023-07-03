import { Component } from '@angular/core';
import { MusikschuleService } from '../services/musikschule.service';
import { Musikschule } from '../models/musikschule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musikschule-ueberblick',
  templateUrl: './musikschule-ueberblick.component.html',
  styleUrls: ['./musikschule-ueberblick.component.css']
})
export class MusikschuleUeberblickComponent {
  musikschulen: Musikschule[] = [];
  
  refresh() {
    this._service.getMusiklschulen().subscribe(musikschulen => {
      this.musikschulen = musikschulen;
    });
  }

  constructor(private readonly _service: MusikschuleService,
    private _router: Router) {
    this.refresh();
  }

  delete(id: string | undefined | null) {
    if(id === null || id === undefined) return;
    this._service.deleteMusikschule(id).subscribe(() => {
      this.refresh();
    });
  } 

  edit(id: string | undefined | null) {
    if(id === null || id === undefined) return;
    this._router.navigate(['/edit-musikschule', id]);
  }
}
