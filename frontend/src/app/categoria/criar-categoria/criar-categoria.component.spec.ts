import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCategoriaComponent } from './criar-categoria.component';

describe('CriarCategoriaComponent', () => {
  let component: CriarCategoriaComponent;
  let fixture: ComponentFixture<CriarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
