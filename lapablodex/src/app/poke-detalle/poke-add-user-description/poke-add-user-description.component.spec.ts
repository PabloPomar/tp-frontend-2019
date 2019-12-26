import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAddUserDescriptionComponent } from './poke-add-user-description.component';
import {ApiAgregarUserDescriptionService} from '../../api-agregar-user-description.service';
import {UserDescriptionModel2} from '../../userDescription2.model';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokeAddUserDescriptionComponent', () => {
  let component: PokeAddUserDescriptionComponent;
  let fixture: ComponentFixture<PokeAddUserDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ PokeAddUserDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeAddUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
