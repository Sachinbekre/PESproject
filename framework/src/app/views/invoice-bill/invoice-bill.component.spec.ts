import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBillComponent } from './invoice-bill.component';

describe('InvoiceBillComponent', () => {
  let component: InvoiceBillComponent;
  let fixture: ComponentFixture<InvoiceBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
