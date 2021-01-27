import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Fornecedor{
  id?: number
  nome: string
  email: string
  cnpj: string
  endereco: string
  telefone: string
}

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  urlBackend = 'http://localhost:8081/fornecedores/todos'

  fornecedores: Fornecedor[]

  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.httpClient.get<Fornecedor[]>(this.urlBackend).subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

}
