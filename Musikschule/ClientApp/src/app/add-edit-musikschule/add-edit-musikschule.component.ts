import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MusikschuleService } from '../services/musikschule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-musikschule',
  templateUrl: './add-edit-musikschule.component.html',
  styleUrls: ['./add-edit-musikschule.component.css']
})
export class AddEditMusikschuleComponent {
  nameControl = new FormControl('');
  addressControl = new FormControl('');

  constructor(private readonly _musikschuleService: MusikschuleService,
    private _router: Router) { }

  save() {
    let name = this.nameControl.value;
    let address = this.addressControl.value;
    if(name !== null && address !== null) {
      this._musikschuleService.addMusikschule(name, address).subscribe(
        () => {
          this._router.navigate(['/']);
        }
      );
    }  
  }

  cancel() {
      this._router.navigate(['/']);
  }
}
