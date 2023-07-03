import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusikschuleUeberblickComponent } from './musikschule-ueberblick.component';

describe('MusikschuleUeberblickComponent', () => {
  let component: MusikschuleUeberblickComponent;
  let fixture: ComponentFixture<MusikschuleUeberblickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusikschuleUeberblickComponent]
    });
    fixture = TestBed.createComponent(MusikschuleUeberblickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
