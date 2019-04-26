
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
 
@Injectable()
export class UtilProvider {

  menuEmitter = new EventEmitter();
 




  constructor(public http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController,
    ) {
 
  }



  async loading(mensagem, duracao?) {
    const loading = await this.loadingController.create({
      message: mensagem,
      duration: (duracao)? duracao : 200
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  BRL(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

}
