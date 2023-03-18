import { Pessoa } from './../../models/Pessoa';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Buscando pessoas!');
    this.pessoaService.listarPessoas().subscribe(pessoas => {
      console.log('Pessoas carregadas:', pessoas);
      this.pessoas = pessoas;
    });
  }

  detalharPessoa(pessoa: Pessoa) {
    console.log('Detalhando pessoa:', pessoa);
    this.router.navigate(['detalhar-pessoa', pessoa.id]);
  }

}
