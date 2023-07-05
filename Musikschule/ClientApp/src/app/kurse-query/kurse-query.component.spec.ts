import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurseQueryComponent } from './kurse-query.component';

describe('KurseQueryComponent', () => {
  let component: KurseQueryComponent;
  let fixture: ComponentFixture<KurseQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurseQueryComponent]
    });
    fixture = TestBed.createComponent(KurseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
