import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamunnatiComponent } from './samunnati.component';

describe('SamunnatiComponent', () => {
  let component: SamunnatiComponent;
  let fixture: ComponentFixture<SamunnatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamunnatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamunnatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
