import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errro404PageComponent } from './errro404-page.component';

describe('Errro404PageComponent', () => {
  let component: Errro404PageComponent;
  let fixture: ComponentFixture<Errro404PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Errro404PageComponent]
    });
    fixture = TestBed.createComponent(Errro404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
