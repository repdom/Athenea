import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharlaComponent } from './charla.component';

describe('CharlaComponent', () => {
  let component: CharlaComponent;
  let fixture: ComponentFixture<CharlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
