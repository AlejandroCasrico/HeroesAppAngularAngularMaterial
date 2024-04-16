import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPgeComponent } from './register-pge.component';

describe('RegisterPgeComponent', () => {
  let component: RegisterPgeComponent;
  let fixture: ComponentFixture<RegisterPgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPgeComponent]
    });
    fixture = TestBed.createComponent(RegisterPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
