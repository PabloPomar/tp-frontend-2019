import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexGifComponent } from './dex-gif.component';

describe('DexGifComponent', () => {
  let component: DexGifComponent;
  let fixture: ComponentFixture<DexGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
