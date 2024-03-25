import { Component, Input } from '@angular/core';
import { ImgModalService } from 'src/services/img-modal.service';

@Component({
  selector: 'tq-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrl: './img-modal.component.scss'
})
export class ImgModalComponent {
  @Input() imgPath: string;

  constructor(
    private _imgModalService: ImgModalService,
  ) {}

  public closeModal(): void {
    this._imgModalService.isUsingModal = false;
  }
}
