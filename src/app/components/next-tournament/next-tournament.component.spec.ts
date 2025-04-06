import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTournamentComponent } from './next-tournament.component';

describe('NextTournamentComponent', () => {
  let component: NextTournamentComponent;
  let fixture: ComponentFixture<NextTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextTournamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
