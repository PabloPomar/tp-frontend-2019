import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeUserDescriptionComponent } from './poke-user-description.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokeUserDescriptionComponent', () => {
  let component: PokeUserDescriptionComponent;
  let fixture: ComponentFixture<PokeUserDescriptionComponent>;
  let usDesc: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ PokeUserDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeUserDescriptionComponent);
    component = fixture.componentInstance;
    usDesc = {
      idDescripcion: 0,
      usuario: 'Nadie',
      descripcion: 'vacio',
      likes: 11,
      dislike: 0,
      fecha: 2019 - 12 - 17
    } ;
    component.userDescription = usDesc;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
