import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetalleComponent } from './poke-detalle.component';

describe('PokeDetalleComponent', () => {
  let component: PokeDetalleComponent;
  let fixture: ComponentFixture<PokeDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
