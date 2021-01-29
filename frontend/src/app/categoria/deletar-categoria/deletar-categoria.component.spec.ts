import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCategoriaComponent } from './deletar-categoria.component';

describe('DeletarCategoriaComponent', () => {
  let component: DeletarCategoriaComponent;
  let fixture: ComponentFixture<DeletarCategoriaComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
