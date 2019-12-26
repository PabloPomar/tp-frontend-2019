import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeUsuarioComponent } from './registro-de-usuario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('RegistroDeUsuarioComponent', () => {
  let component: RegistroDeUsuarioComponent;
  let fixture: ComponentFixture<RegistroDeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
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
