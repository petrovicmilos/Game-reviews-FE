import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReviewsComponent } from './latest-reviews.component';

describe('LatestReviewsComponent', () => {
  let component: LatestReviewsComponent;
  let fixture: ComponentFixture<LatestReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestReviewsComponent]
    });
    fixture = TestBed.createComponent(LatestReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
