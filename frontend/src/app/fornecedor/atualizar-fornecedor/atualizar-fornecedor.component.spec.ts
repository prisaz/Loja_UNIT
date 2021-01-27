import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFornecedorComponent } from './atualizar-fornecedor.component';

describe('AtualizarFornecedorComponent', () => {
  let component: AtualizarFornecedorComponent;
  let fixture: ComponentFixture<AtualizarFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
