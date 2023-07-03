import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMusikschuleComponent } from './add-edit-musikschule.component';

describe('AddEditMusikschuleComponent', () => {
  let component: AddEditMusikschuleComponent;
  let fixture: ComponentFixture<AddEditMusikschuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditMusikschuleComponent]
    });
    fixture = TestBed.createComponent(AddEditMusikschuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
