import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMilestoneComponent } from './download-milestone.component';

describe('DownloadMilestoneComponent', () => {
  let component: DownloadMilestoneComponent;
  let fixture: ComponentFixture<DownloadMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadMilestoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
