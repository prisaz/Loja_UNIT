import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { CriarFornecedorComponent } from './fornecedor/criar-fornecedor/criar-fornecedor.component';
import { AtualizarFornecedorComponent } from './fornecedor/atualizar-fornecedor/atualizar-fornecedor.component';
import { DeletarFornecedorComponent } from './fornecedor/deletar-fornecedor/deletar-fornecedor.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CriarCategoriaComponent } from './categoria/criar-categoria/criar-categoria.component';
import { AtualizarCategoriaComponent } from './categoria/atualizar-categoria/atualizar-categoria.component';
import { DeletarCategoriaComponent } from './categoria/deletar-categoria/deletar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FornecedorComponent,
    CriarFornecedorComponent,
    AtualizarFornecedorComponent,
    DeletarFornecedorComponent,
    CategoriaComponent,
    CriarCategoriaComponent,
    AtualizarCategoriaComponent,
    DeletarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
