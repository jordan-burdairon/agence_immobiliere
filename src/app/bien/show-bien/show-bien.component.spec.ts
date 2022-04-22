import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBienComponent } from './show-bien.component';

describe('ShowBienComponent', () => {
  let component: ShowBienComponent;
  let fixture: ComponentFixture<ShowBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
