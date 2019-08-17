import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImsComponent } from './add-ims.component';

describe('AddImsComponent', () => {
  let component: AddImsComponent;
  let fixture: ComponentFixture<AddImsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
