import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmativeFormComponent } from './affirmative-form.component';

describe('AffirmativeFormComponent', () => {
  let component: AffirmativeFormComponent;
  let fixture: ComponentFixture<AffirmativeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffirmativeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffirmativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
