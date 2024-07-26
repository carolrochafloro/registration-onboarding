import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStep2Component } from './individual-step2.component';

describe('IndividualStep2Component', () => {
  let component: IndividualStep2Component;
  let fixture: ComponentFixture<IndividualStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
