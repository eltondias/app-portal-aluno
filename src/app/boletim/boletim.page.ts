import { BoletimService } from './../services/boletim.service';
import { AlunoService } from './../services/aluno.service';
import { UtilProvider } from './../services/util';
import { Aluno } from './../model/Aluno';
import { MensalidadeService } from './../services/mensalidade.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, MenuController } from '@ionic/angular';
import { PeriodosPage } from '../periodos/periodos.page';
import { TurmaService } from '../services/turma.service';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {

  disciplinas = [];
  aluno = new Aluno();
  mensalidades = [];
  semestres: [] = JSON.parse(localStorage.getItem('semestres'));
  semestreSelecionado: any;
  curso: any;
  turma: any;
  dataHora =  new Date();
  printActive = false;

  constructor(
      private boletimService: BoletimService,
      private turmaService: TurmaService,
      private cursoService: CursoService,
      private util: UtilProvider,
      private menu: MenuController
  ) { }

  ngOnInit() {
    this.aluno = JSON.parse(localStorage.getItem('aluno'));
    this.curso = JSON.parse(localStorage.getItem('curso'));
    this.getPeriodo(this.semestres.length-1);
    if(!this.turma)
      this.getTurma() 
  }


  getPeriodo(indice) {
    const load = this.util.loading('Gerando boletim', 1000);
    this.semestreSelecionado = <any>this.semestres[indice];
    this.getBoletim();
  }

  getBoletim() {
    this.boletimService.getBoletim({matricula: this.aluno.matric, ano: this.semestreSelecionado.ano , periodo: this.semestreSelecionado.seqano}).subscribe(
      (res) => {
        this.disciplinas = res.body;
        console.log(res);       
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCurso() {
    this.cursoService.getCurso({cod: this.turma.curso}).subscribe(
      (res) => {
        console.log(res.body);
        this.curso = res.body;
        localStorage.setItem('curso', JSON.stringify( this.curso));
      }
    );
  }


  getTurma() {
    this.turmaService.getTurma({cod: this.semestreSelecionado.turma, ano: this.semestreSelecionado.ano , periodo: this.semestreSelecionado.seqano  }).subscribe(
      (res) => {
        this.turma = res.body;
        if(!this.curso)
        this.getCurso();
        console.log(this.turma)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  imprimir() {
    this.util.menuEmitter.emit(false);
    this.printActive = true;
    setTimeout(() => {
     const w = window;
     //w['title']  =  'Teste';
      w.print();
      window.location.reload();
      // const e = new Event('');
      // window.onafterprint(alert('teste'), e.);
      this.printActive = false;
      this.util.menuEmitter.emit(true);
    }, 100);
    
  }


}
