import { Directive, HostListener } from '@angular/core';
import { ImgModalService } from 'src/services/img-modal.service';

@Directive({
  selector: 'img[tqImgModal]',
  standalone: true
})
export class ImgModalDirective {
  constructor(
    private _imgModalService: ImgModalService
  ) { }

  @HostListener('click', ['$event'])
  public openImageOnModal(event: MouseEvent): void {
    this._imgModalService.imgPath = (event.target as HTMLImageElement).src;
    this._imgModalService.isUsingModal = true;

    console.log(this._imgModalService.imgPath, this._imgModalService.isUsingModal);
  }
}
