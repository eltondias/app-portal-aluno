import { AlunoService } from './../services/aluno.service';
import { UtilProvider } from './../services/util';
import { Aluno } from './../model/Aluno';
import { MensalidadeService } from './../services/mensalidade.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mensalidade',
  templateUrl: './mensalidade.page.html',
  styleUrls: ['./mensalidade.page.scss'],
})
export class MensalidadePage implements OnInit {
  printActive = false;
  aluno = new Aluno();
  mensalidades = [];
  semestres: [] = JSON.parse(localStorage.getItem('semestres'));
  ano: string;
  semestre: string;
  peridoSelecionado: string;
  constructor(
    private mensalidadeService: MensalidadeService,
    private util: UtilProvider,
    public popoverController: PopoverController,
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    this.aluno = JSON.parse(localStorage.getItem('aluno'));
    this.getPeriodo();
  }



  getMensalidades() {

    this.mensalidadeService.getMensalidadesPorPeriodo({ matricula: this.aluno.matric, ano: this.ano, seqano: this.semestre }).subscribe(

      (res) => {
        console.log(res);
        if (res.body) {
          this.mensalidades = res.body;
        } else {
          this.mensalidades = [];
        }
      },
      (error) => {
        this.mensalidades = [];
      }
    );
  }



  getPeriodo() {
    const load = this.util.loading('Consultando pagamentos', 1000);
    if (this.peridoSelecionado) {
      const p = this.peridoSelecionado.split("|");
      this.ano = p[0];
      this.semestre = p[1];
    } else {
      const ultimo = <any>this.semestres[this.semestres.length - 1];
      this.ano = ultimo.ano;
      this.semestre = ultimo.seqano;
      this.peridoSelecionado = this.ano + '|' + this.semestre;
    }
    this.getMensalidades();
  }

  gerarBoleto(id: number) {
    console.log(id);
    const url = 'http://201.20.113.123:8000/boleto-aluno/'+ id + '?matricula=' + this.aluno.matric;
    window.open(url, '_blank');
   

    // this.alunoService.loginSiteAntigo({ usuario: this.aluno.matric, senha: this.aluno.numcpf }).subscribe((res) => {
    //   console.log(res);
    // });
  }

  imprimir() {
    this.util.menuEmitter.emit(false);
    this.printActive = true;
    setTimeout(() => {
      const w = window;
      w.print();
      window.location.href = '/mensalidade';
      this.printActive = false;
      this.util.menuEmitter.emit(true);
    }, 100);

  }




}
