import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFieldsWindowComponent } from './user-fields-window.component';

describe('UserFieldsWindowComponent', () => {
  let component: UserFieldsWindowComponent;
  let fixture: ComponentFixture<UserFieldsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFieldsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFieldsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
