import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusikschuleQueryComponent } from './musikschule-query.component';

describe('MusikschuleQueryComponent', () => {
  let component: MusikschuleQueryComponent;
  let fixture: ComponentFixture<MusikschuleQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusikschuleQueryComponent]
    });
    fixture = TestBed.createComponent(MusikschuleQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
