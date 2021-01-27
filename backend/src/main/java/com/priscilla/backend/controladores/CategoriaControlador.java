package com.priscilla.backend.controladores;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.priscilla.backend.entidades.Categoria;
import com.priscilla.backend.repositorios.CategoriaRepositorio;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/categorias")
public class CategoriaControlador {
	
	@Autowired
	CategoriaRepositorio repositorio;
	
	@GetMapping(path="todos")
		public @ResponseBody Iterable<Categoria> getAllCategorias() {
			//This returns a Json or XML with the categorias
		return repositorio.findAll();
	}
	
	@PostMapping(path="/adicionar")
	  public  ResponseEntity<Categoria> addNewCategoria (@RequestBody Categoria f) {
		repositorio.save(f);
	    return ResponseEntity.ok().body(f);
	  }
	
	@PutMapping(value = "/atualizar/{id}")
	public ResponseEntity<Categoria> atualizarCategoria (
			@RequestBody Categoria dadosNovos, @PathVariable Integer id){
		dadosNovos.setId(id);		
		repositorio.save(dadosNovos);
		return ResponseEntity.ok().body(dadosNovos);
	}
	
	@DeleteMapping(value = "/deletar/{id}")
	public void deletarCategoria (@PathVariable Integer id) {
		repositorio.deleteById(id);
	}
	
	@GetMapping(path="/{id}")
	public @ResponseBody Optional<Categoria> getForecedor(@PathVariable Integer id) {
	return repositorio.findById(id);
}
}
