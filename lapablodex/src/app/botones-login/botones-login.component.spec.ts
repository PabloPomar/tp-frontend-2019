import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonesLoginComponent } from './botones-login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('BotonesLoginComponent', () => {
  let component: BotonesLoginComponent;
  let fixture: ComponentFixture<BotonesLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ BotonesLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
