import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursUeberblickComponent } from './kurs-ueberblick.component';

describe('KursUeberblickComponent', () => {
  let component: KursUeberblickComponent;
  let fixture: ComponentFixture<KursUeberblickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KursUeberblickComponent]
    });
    fixture = TestBed.createComponent(KursUeberblickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
