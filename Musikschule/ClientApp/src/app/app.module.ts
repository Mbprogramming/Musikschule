import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MusikschuleUeberblickComponent } from './musikschule-ueberblick/musikschule-ueberblick.component';
import { AddEditMusikschuleComponent } from './add-edit-musikschule/add-edit-musikschule.component';
import { KursUeberblickComponent } from './kurs-ueberblick/kurs-ueberblick.component';
import { AddEditKursComponent } from './add-edit-kurs/add-edit-kurs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MusikschuleUeberblickComponent,
    AddEditMusikschuleComponent,
    KursUeberblickComponent,
    AddEditKursComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MusikschuleUeberblickComponent, pathMatch: 'full' },
      { path: 'add-musikschule', component: AddEditMusikschuleComponent },
      { path: 'edit-musikschule/:id', component: AddEditMusikschuleComponent },
      { path: 'add-kurs/:musikschuleId', component: AddEditKursComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
