import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKursComponent } from './add-edit-kurs.component';

describe('AddEditKursComponent', () => {
  let component: AddEditKursComponent;
  let fixture: ComponentFixture<AddEditKursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditKursComponent]
    });
    fixture = TestBed.createComponent(AddEditKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
