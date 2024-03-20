import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgModalService {
  public imgPath: string;
  public isUsingModal: boolean;
}
