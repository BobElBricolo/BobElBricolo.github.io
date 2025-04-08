import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplaySectionComponent } from './gameplay-section.component';

describe('GameplaySectionComponent', () => {
  let component: GameplaySectionComponent;
  let fixture: ComponentFixture<GameplaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplaySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameplaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
