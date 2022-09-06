import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();


  valor!: number ;
  destino!: number;

  transferir() {
    console.log('Solicitada nova transferencia');
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir);
    // limpar os campos apos gravar
    this.limparCampos();

    // console.log('Valor:', this.valor );
    // console.log('Destino:', this.destino );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
