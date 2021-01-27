import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Categoria{
  id?: number
  nome: string
  ativo: boolean
  descricao: string

}

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.scss']
})
export class CriarCategoriaComponent implements OnInit {
  
  urlBackend = 'http://localhost:8081/categorias/adicionar'

  categoria: Categoria = {
    nome: '',
    ativo: null,
    descricao: '' 
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  inserirCategoria(): void{
    this.httpClient.post<Categoria>(this.urlBackend ,this.categoria).subscribe(() =>{
      alert("Categoria Cadastrada!")
    })
  }

}
