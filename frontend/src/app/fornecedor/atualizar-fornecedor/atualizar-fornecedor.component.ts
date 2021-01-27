import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Fornecedor{
  id?: number
  nome: string
  email: string
  cnpj: string
  endereco: string
  telefone: string
}

@Component({
  selector: 'app-atualizar-fornecedor',
  templateUrl: './atualizar-fornecedor.component.html',
  styleUrls: ['./atualizar-fornecedor.component.scss']
})
export class AtualizarFornecedorComponent implements OnInit {

  urlBackend = 'http://localhost:8081/fornecedores'

  fornecedor: Fornecedor

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id')
    this.httpClient.get<Fornecedor>(this.urlBackend+'/'+ id).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }

  atualizarFornecedor(){
    this.httpClient.put(this.urlBackend+'/atualizar/'+this.fornecedor.id, this.fornecedor).subscribe(() => {
      alert("Fornecedor Atualizado!")
    })
  }

}
