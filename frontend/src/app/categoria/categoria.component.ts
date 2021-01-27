import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Categoria{
  id?: number
  nome: string
  ativo: boolean
  descricao: string

}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  urlBackend = 'http://localhost:8081/categorias/todos'

  categorias: Categoria[]

  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.httpClient.get<Categoria[]>(this.urlBackend).subscribe(categorias => {
      this.categorias = categorias
    })
  }

}