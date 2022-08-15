import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayInfoComponent } from './user-display-info.component';

describe('UserDisplayInfoComponent', () => {
  let component: UserDisplayInfoComponent;
  let fixture: ComponentFixture<UserDisplayInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisplayInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
