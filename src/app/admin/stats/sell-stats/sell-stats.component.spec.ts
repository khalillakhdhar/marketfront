import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellStatsComponent } from './sell-stats.component';

describe('SellStatsComponent', () => {
  let component: SellStatsComponent;
  let fixture: ComponentFixture<SellStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
