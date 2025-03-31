import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnalityComponent } from './fonctionnality.component';

describe('FonctionnalityComponent', () => {
  let component: FonctionnalityComponent;
  let fixture: ComponentFixture<FonctionnalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonctionnalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonctionnalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
