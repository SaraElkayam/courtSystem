import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderNavBarComponent } from './app-header-nav-bar.component';

describe('AppHeaderNavBarComponent', () => {
  let component: AppHeaderNavBarComponent;
  let fixture: ComponentFixture<AppHeaderNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHeaderNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeaderNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
