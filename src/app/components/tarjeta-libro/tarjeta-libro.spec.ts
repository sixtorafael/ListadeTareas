import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaLibroComponent } from './tarjeta-libro';

describe('TarjetaLibro', () => {
  let component: TarjetaLibroComponent;
  let fixture: ComponentFixture<TarjetaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
