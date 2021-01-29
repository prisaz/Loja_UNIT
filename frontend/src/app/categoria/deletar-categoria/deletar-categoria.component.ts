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
  selector: 'app-deletar-categoria',
  templateUrl: './deletar-categoria.component.html',
  styleUrls: ['./deletar-categoria.component.scss']
})
export class DeletarCategoriaComponent implements OnInit {

  urlBackend = 'http://localhost:8081/categorias'

  categoria: Categoria
 
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }
 
  ngOnInit(): void {
   var id = this.route.snapshot.paramMap.get('id')
   this.httpClient.get<Categoria>(this.urlBackend+'/'+ id).subscribe(categoria => {
   this.categoria = categoria
  })
  }
  deletarCategoria(){
     this.httpClient.delete(this.urlBackend+'/deletar/'+this.categoria.id).subscribe(() => {
        alert("Categoria Deletada!")
    })
  }
  
  }
