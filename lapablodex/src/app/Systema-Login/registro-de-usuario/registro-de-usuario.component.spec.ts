import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeUsuarioComponent } from './registro-de-usuario.component';

describe('RegistroDeUsuarioComponent', () => {
  let component: RegistroDeUsuarioComponent;
  let fixture: ComponentFixture<RegistroDeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
