import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/Pessoa';

@Component({
  templateUrl: './detalhar-pessoa.component.html',
  styleUrls: ['./detalhar-pessoa.component.scss']
})
export class DetalharPessoaComponent implements OnInit {

  pessoa: Pessoa;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    console.log('Chamando servidor para detalhar pessoa');

    this.route.paramMap.subscribe(params => {
      this.pessoaService.detalharPessoa(Number(params.get('id'))).subscribe(pessoa => {
        console.log('Pessoa recebida pelo id:', pessoa);
        this.pessoa = pessoa;
      });

    });
  }

}
