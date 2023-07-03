import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MusikschuleService } from '../services/musikschule.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-musikschule',
  templateUrl: './add-edit-musikschule.component.html',
  styleUrls: ['./add-edit-musikschule.component.css']
})
export class AddEditMusikschuleComponent {
  id: string | null = null;
  nameControl = new FormControl('');
  addressControl = new FormControl('');

  constructor(private readonly _musikschuleService: MusikschuleService,
    private _router: Router,
    private route: ActivatedRoute) { 
      let id = this.route.snapshot.paramMap.get('id');
      if(id !== null) {
        this.id = id;
        this._musikschuleService.getMusikschule(id).subscribe(schule => {
          if(schule.name)
            this.nameControl.setValue(schule.name);
          if(schule.adresse)
            this.addressControl.setValue(schule.adresse);
        });
      }
    }

  save() {
    let name = this.nameControl.value;
    let address = this.addressControl.value;
    if(name !== null && address !== null) {
      if(this.id !== null) {
        this._musikschuleService.editMusikschule(this.id, name, address).subscribe(
          () => {
            this._router.navigate(['/']);
          }
        );
      } else {
        this._musikschuleService.addMusikschule(name, address).subscribe(
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
