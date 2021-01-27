import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCategoriaComponent } from './categoria/atualizar-categoria/atualizar-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CriarCategoriaComponent } from './categoria/criar-categoria/criar-categoria.component';
import { DeletarCategoriaComponent } from './categoria/deletar-categoria/deletar-categoria.component';
import { AtualizarFornecedorComponent } from './fornecedor/atualizar-fornecedor/atualizar-fornecedor.component';
import { CriarFornecedorComponent } from './fornecedor/criar-fornecedor/criar-fornecedor.component';
import { DeletarFornecedorComponent } from './fornecedor/deletar-fornecedor/deletar-fornecedor.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { InicioComponent } from './inicio/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },{
    path: 'fornecedores',
    component: FornecedorComponent
  },{
    path: 'fornecedores/criar',
    component: CriarFornecedorComponent
  },{
    path: 'fornecedores/atualizar/:id',
    component: AtualizarFornecedorComponent
  },{
    path: 'fornecedores/deletar/:id',
    component: DeletarFornecedorComponent
  },{
    path: 'categorias',
    component: CategoriaComponent
  },{
    path: 'categorias/criar',
    component: CriarCategoriaComponent
  },{
    path: 'categorias/atualizar/:id',
    component: AtualizarCategoriaComponent
  },{
    path: 'categorias/deletar/:id',
    component: DeletarCategoriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
