import { AuthGuardService } from './auth-guard.service';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilProvider } from './services/util';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  exibirMenu = true;

  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'Dados Cadastrais',
    //   url: '/pagina/dadoscadastrais',
    //   icon: 'person'
    // },
    // {
    //   title: 'Meu curso',
    //   url: '/pagina/meucurso',
    //   icon: 'school'
    // },
    // {
    //   title: 'Diário de classe',
    //   url: '/pagina/diariodeclasse',
    //   icon: 'bookmarks'
    // },
    {
      title: 'Boletim',
      url: '/boletim',
      icon: 'pulse'
    },
    {
      title: 'Mensalidade',
      url: '/mensalidade',
      icon: 'logo-usd'
    },
    // {
    //   title: 'Professor por disciplina',
    //   url: '/pagina/professorpordisciplina',
    //   icon: 'accessibility'
    // },
    // {
    //   title: 'Disciplinas cursadas',
    //   url: '/pagina/disciplinascursadas',
    //   icon: 'check_circle'
    // },
    // {
    //   title: 'Biblioteca',
    //   url: '/pagina/biblioteca',
    //   icon: 'book'
    // }


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authGuard: AuthGuardService,
    public router: Router,
    public util: UtilProvider
  ) {
    this.initializeApp();
    this.exibirMenu = this.authGuard.canActivate();
  }

  ngOnInit() {
    this.exibirMenu = this.authGuard.canActivate();
    this.authGuard.authEmitter.subscribe(autenticado => {
      this.exibirMenu = autenticado;
    });

    this.util.menuEmitter.subscribe( retorno => {
      this.exibirMenu = retorno;
    });

  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    console.log('logOut')
    localStorage.removeItem('aluno');
    localStorage.removeItem('curso');
    localStorage.removeItem('semestres');

   
    const retorno = this.util.loading('Até mais...', 500);
    retorno.then(()=>{
      this.router.navigate(['login']);
    this.exibirMenu = false;
    })
      
  
  }

}
