import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFornecedorComponent } from './criar-fornecedor.component';

describe('CriarFornecedorComponent', () => {
  let component: CriarFornecedorComponent;
  let fixture: ComponentFixture<CriarFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
