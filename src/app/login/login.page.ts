import { UtilProvider } from './../services/util';
import { Aluno } from './../model/Aluno';
import { AlunoService } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { SemestreService } from '../services/semestre.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  erroLogin = false;
  erroAutenticacao = false;
  aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private semestreService: SemestreService,
    public loadingController: LoadingController,
    public util: UtilProvider,
    public router: Router,
    private authGuard: AuthGuardService

  ) { }

  ngOnInit() { 
    const aluno = localStorage.getItem('aluno');
    if (aluno) {
      this.router.navigate(['home']);
      return false;
    }
  }

  login() {

    this.erroAutenticacao = false;
    this.erroLogin = false;

    const retorno = this.util.loading('Autenticando...', 2000);
    this.alunoService.login({ matricula: this.aluno.matric, cpf: this.aluno.numcpf }).subscribe(
      (res) => {                    
        setTimeout(() => {
          if (res.body) {
            this.aluno = res.body;
            this.getSemestres();
            localStorage.setItem('aluno', JSON.stringify(this.aluno));
            console.log(this.aluno);                            
            this.authGuard.authEmitter.emit(true);
          } else {
            this.erroAutenticacao = true;
          }
        }, 1000);             
      },
      (error: HttpErrorResponse) => {     
        retorno.then(() =>{
          console.log(error);
          this.erroLogin = true;
        });        
      }
    );
  }

  getSemestres(){
    this.semestreService.getSemestres({matricula: this.aluno.matric}).subscribe(res => {
      console.log(res);
      if(res.body) {        
        localStorage.setItem('semestres', JSON.stringify(res.body));
        window.location.reload();
      }      
    });
  }


}
