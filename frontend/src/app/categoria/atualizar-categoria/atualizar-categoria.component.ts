import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Categoria{
  id?: number
  nome: string
  ativo: boolean
  descricao: string
}

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['./atualizar-categoria.component.scss']
})
export class AtualizarCategoriaComponent implements OnInit {

  urlBackend = 'http://localhost:8081/categorias'

  categoria: Categoria
 
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }
 
  ngOnInit(): void {
   var id = this.route.snapshot.paramMap.get('id')
   this.httpClient.get<Categoria>(this.urlBackend+'/'+ id).subscribe(categoria => {
   this.categoria = categoria
  })
  }
  atualizarCategoria(){
    this.httpClient.put(this.urlBackend+'/atualizar/'+this.categoria.id, this.categoria).subscribe(() => {
      alert("Categoria Atualizada!")
    })
  }
  
  }
