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
  selector: 'app-deletar-fornecedor',
  templateUrl: './deletar-fornecedor.component.html',
  styleUrls: ['./deletar-fornecedor.component.scss']
})
export class DeletarFornecedorComponent implements OnInit {


  urlBackend = 'http://localhost:8081/fornecedores'

  fornecedor: Fornecedor

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id')
    this.httpClient.get<Fornecedor>(this.urlBackend+'/'+ id).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }
  deletarFornecedor(){
    this.httpClient.delete(this.urlBackend+'/deletar/'+this.fornecedor.id).subscribe(() => {
      alert("Fornecedor Deletado!")
    })
  }

}
