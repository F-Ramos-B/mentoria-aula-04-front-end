import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  listarPessoas() {
    return this.http.get<Pessoa[]>('http://localhost:8080/pessoas');
  }

  detalharPessoa(id: number) {
    return this.http.get<Pessoa>('http://localhost:8080/pessoas/' + id);
  }

}
