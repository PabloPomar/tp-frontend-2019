import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeDetalleComponent } from './poke-detalle.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {PokeUserDescriptionComponent} from './poke-user-description/poke-user-description.component';
import {PokeAddUserDescriptionComponent} from './poke-add-user-description/poke-add-user-description.component';
import {BotonesLoginComponent} from '../botones-login/botones-login.component';

describe('PokeDetalleComponent', () => {
  let component: PokeDetalleComponent;

  let fixture: ComponentFixture<PokeDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ PokeDetalleComponent, PokeUserDescriptionComponent, PokeAddUserDescriptionComponent, BotonesLoginComponent],
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
