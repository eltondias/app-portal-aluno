import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  pagina: any;
  paginas = [
    {pagina: 'dadoscadastrais', titulo: 'Dados cadastrais', link: 'http://www.esamaz.com.br/portalaluno/aluno/form_dados_cadastrais/form_dados_cadastrais.php'},
    {pagina: 'meucurso', titulo: 'Meu curso', link: 'http://www.esamaz.com.br/portalaluno/aluno/grid_meu_curso/grid_meu_curso.php'},
    {pagina: 'diariodeclasse', titulo: 'Diário de classe', link: 'http://www.esamaz.com.br/portalaluno/aluno/grid_diario_classe/grid_diario_classe.php'},
    {pagina: 'professorpordisciplina', titulo: 'Professor por disciplina', link: 'http://www.esamaz.com.br/portalaluno/aluno/grid_professores_disciplina/grid_professores_disciplina.php'},
    {pagina: 'biblioteca', titulo: 'Biblioteca', link: 'http://www.esamaz.com.br/portalaluno/aluno/grid_CONSULTA_BIBLIOTECA/grid_CONSULTA_BIBLIOTECA.php'},
  ]
  constructor(private route: ActivatedRoute,  public loadingController: LoadingController ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPagina(params['page'])
    });
  }

  async loading(mensagem) {
    const loading = await this.loadingController.create({ message: mensagem, duration: 2000 });
    await loading.present();
  }


  getPagina(page) {
      const pagina =  this.paginas.find(x => x.pagina === page);
      this.pagina = pagina;
      this.loading(this.pagina.titulo);
  }

}
