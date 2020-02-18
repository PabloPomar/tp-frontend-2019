import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { PaginaListaComponent } from './pagina-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {PokeTarjetaComponent} from './poke-tarjeta/poke-tarjeta.component';
import {BotonesLoginComponent} from '../botones-login/botones-login.component';

describe('PaginaListaComponent', () => {
  let component: PaginaListaComponent;
  let fixture: ComponentFixture<PaginaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ PaginaListaComponent, PokeTarjetaComponent, BotonesLoginComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
