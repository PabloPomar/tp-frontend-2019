import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTestComponent } from './lista-test.component';

describe('ListaTestComponent', () => {
  let component: ListaTestComponent;
  let fixture: ComponentFixture<ListaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
