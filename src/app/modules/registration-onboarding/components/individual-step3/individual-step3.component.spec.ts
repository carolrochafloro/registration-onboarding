import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStep3Component } from './individual-step3.component';

describe('IndividualStep3Component', () => {
  let component: IndividualStep3Component;
  let fixture: ComponentFixture<IndividualStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualStep3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
