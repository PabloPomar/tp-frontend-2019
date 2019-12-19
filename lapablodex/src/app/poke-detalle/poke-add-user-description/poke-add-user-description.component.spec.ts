import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAddUserDescriptionComponent } from './poke-add-user-description.component';

describe('PokeAddUserDescriptionComponent', () => {
  let component: PokeAddUserDescriptionComponent;
  let fixture: ComponentFixture<PokeAddUserDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
