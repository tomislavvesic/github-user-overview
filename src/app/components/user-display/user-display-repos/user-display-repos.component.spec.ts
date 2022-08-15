import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayReposComponent } from './user-display-repos.component';

describe('UserDisplayReposComponent', () => {
  let component: UserDisplayReposComponent;
  let fixture: ComponentFixture<UserDisplayReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisplayReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
