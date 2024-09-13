import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxStylingComponent } from './box-styling.component';

describe('BoxStylingComponent', () => {
  let component: BoxStylingComponent;
  let fixture: ComponentFixture<BoxStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
