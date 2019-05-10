import { Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular';
import { ContentView, ShownModallyData, View } from 'tns-core-modules/ui/content-view';

import { ModalWrapperConfig } from './config/modal-wrapper-config';
import { ModalWrapperConfigHelper } from './config/modal-wrapper-config.helper';
import { IModalController } from '../services/modal.controller.interface';

@Component({
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss'],
})
export class ModalWrapperComponent extends ContentView {
  config: ModalWrapperConfig;
  view: View;

  constructor(private modalController: IModalController, private params: ModalDialogParams) {
    super();
    this.config = ModalWrapperConfigHelper.processOptionalValues(this.params.context);
    this.modalController.register({ close: this.params.closeCallback });
  }

  onShowingModally(args: ShownModallyData): void {
    this.view = <View>args.object;
    this.animateModal();
  }

  onModalDismiss(): void {
    this.modalController.closeTopmost();
  }

  // // TODO: fix animations
  // private animateBackgroundColor(stackLayout: StackLayout): void {
  //   const shadowColor = ColorHelper.getThemeColor('kirby-grey-7');
  //   stackLayout.backgroundColor = new Color(
  //     ColorHelper.getAlphaIn255Range(this.config.dim),
  //     shadowColor.r,
  //     shadowColor.g,
  //     shadowColor.b
  //   );
  //   stackLayout.color = new Color(ColorHelper.getThemeColor('kirby-brand-5').hex);
  // }

  private animateModal(): void {
    if (this.view.android) {
      this.view
        .animate({
          translate: { x: 0, y: Number(this.view.height) },
          duration: 0,
        })
        .then(() => {
          this.view.animate({
            translate: { x: 0, y: 0 },
            duration: 300,
          });
        });
    }
    // TODO: by default iOS slides up, however it slides together with the dimmed background, hence needs fixing
  }
}