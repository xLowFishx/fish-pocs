import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyPage } from './legacy.page';

describe('LegacyPage', () => {
  let component: LegacyPage;
  let fixture: ComponentFixture<LegacyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegacyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LegacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
