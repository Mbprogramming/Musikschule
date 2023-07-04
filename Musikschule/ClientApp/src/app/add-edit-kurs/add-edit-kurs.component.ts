import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KursService } from '../services/kurs.service';
import { MusikschuleService } from '../services/musikschule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Musikschule } from '../models/musikschule';

@Component({
  selector: 'app-add-edit-kurs',
  templateUrl: './add-edit-kurs.component.html',
  styleUrls: ['./add-edit-kurs.component.css'],
})
export class AddEditKursComponent {
  id: string | null = null;
  musikschuleId: string | null = null;
  musikschule: Musikschule | null = null;

  nameControl = new FormControl('');
  inhaltControl = new FormControl('');
  startControl = new FormControl(Date.now());
  dauerControl = new FormControl(90);
  teilnehmerGesamtControl = new FormControl(10);
  teilnehmerBelegtControl = new FormControl(0);

  constructor(
    private readonly _kursService: KursService,
    private readonly _musikschuleService: MusikschuleService,
    private _router: Router,
    private route: ActivatedRoute
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    let musikSchuleId = this.route.snapshot.paramMap.get('musikschuleId');
    if (id !== null) {
      this.id = id;
      /*
        this._musikschuleService.getMusikschule(id).subscribe(schule => {
          if(schule.name)
            this.nameControl.setValue(schule.name);
          if(schule.adresse)
            this.addressControl.setValue(schule.adresse);
        });
        */
    }
    if (musikSchuleId !== null) {
      this.musikschuleId = musikSchuleId;
      this._musikschuleService
        .getMusikschule(musikSchuleId)
        .subscribe((schule) => {
          this.musikschule = schule;
        });
    }
  }

  save() {
    let name = this.nameControl.value;
    let inhalt = this.inhaltControl.value;
    let start = this.startControl.value !== null ? new Date(this.startControl.value) : new Date(Date.now()); 
    let dauer = "00:90:00";// + this.dauerControl.value;
    let teilnehmerGesamt = this.teilnehmerGesamtControl.value;
    let teilnehmerBelegt = this.teilnehmerBelegtControl.value;

    if(name !== null && inhalt !== null && dauer !== null && teilnehmerGesamt !== null && teilnehmerBelegt !== null && this.musikschuleId !== null) {
      if(this.id !== null) {
        // this._musikschuleService.editMusikschule(this.id, name, address).subscribe(
        //   () => {
        //     this._router.navigate(['/']);
        //   }
        // );
      } else {
        this._kursService.addKurs(this.musikschuleId,
          name, inhalt, start, dauer,
          teilnehmerGesamt, teilnehmerBelegt).subscribe(
          () => {
            this._router.navigate(['/']);
          }
        );
      }
    }  
  }

  cancel() {
      this._router.navigate(['/']);
  }
}
