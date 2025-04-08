import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAppComponent } from './preview-app.component';

describe('PreviewAppComponent', () => {
  let component: PreviewAppComponent;
  let fixture: ComponentFixture<PreviewAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
