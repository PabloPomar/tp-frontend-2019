import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DexGifComponent } from './dex-gif/dex-gif.component';
import { PaginaPrincipalComponent } from './pagina-principal.component';
import {ApiConnectionService} from '../api-connection.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaginaPrincipalComponent', () => {
  let component: PaginaPrincipalComponent;
  let fixture: ComponentFixture<PaginaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PaginaPrincipalComponent  , DexGifComponent],
      providers: [ApiConnectionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
