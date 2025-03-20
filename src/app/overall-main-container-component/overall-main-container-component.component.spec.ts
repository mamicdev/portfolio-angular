import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallMainContainerComponentComponent } from './overall-main-container-component.component';

describe('OverallMainContainerComponentComponent', () => {
  let component: OverallMainContainerComponentComponent;
  let fixture: ComponentFixture<OverallMainContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallMainContainerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallMainContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
