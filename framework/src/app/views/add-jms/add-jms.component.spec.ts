import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJmsComponent } from './add-jms.component';

describe('AddJmsComponent', () => {
  let component: AddJmsComponent;
  let fixture: ComponentFixture<AddJmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
