import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeUserDescriptionComponent } from './poke-user-description.component';

describe('PokeUserDescriptionComponent', () => {
  let component: PokeUserDescriptionComponent;
  let fixture: ComponentFixture<PokeUserDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeUserDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
