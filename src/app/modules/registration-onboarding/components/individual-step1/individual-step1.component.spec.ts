import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStep1Component } from './individual-step1.component';

describe('IndividualStep1Component', () => {
  let component: IndividualStep1Component;
  let fixture: ComponentFixture<IndividualStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
