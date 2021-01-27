import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { on } from 'events';

interface Fornecedor{
  id?: number
  nome: string
  email: string
  cnpj: string
  endereco: string
  telefone: string
}

@Component({
  selector: 'app-criar-fornecedor',
  templateUrl: './criar-fornecedor.component.html',
  styleUrls: ['./criar-fornecedor.component.scss']
})
export class CriarFornecedorComponent implements OnInit {

  urlBackend = 'http://localhost:8081/fornecedores/adicionar'

  fornecedor: Fornecedor = {
    nome: '',
    cnpj: '',
    email: '',
    endereco: '',
    telefone: ''
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { 

  }

  inserirFornecedor(): void{
    this.httpClient.post<Fornecedor>(this.urlBackend ,this.fornecedor).subscribe(() =>{
      alert("Fornecedor Cadastrado!")
    })
  }

}
