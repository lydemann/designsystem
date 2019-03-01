import {
  Component,
  OnInit,
  Input,
  HostBinding,
} from '@angular/core';

enum verticalAlignmentEnum {
  top = 'flex-start',
  center = 'center',
  bottom = 'flex-end'
}
enum horisontalAlignmentEnum {
  left = 'flex-start',
  center = 'center',
  right = 'flex-end'
}

export type horisontalAlignment = 'left' | 'center' | 'right';
export type verticalAlignment = 'top' | 'center' | 'bottom';

@Component({
  selector: 'kirby-list-cell',
  templateUrl: './list-cell.component.html',
  styleUrls: ['./list-cell.component.scss']
})
export class ListCellComponent implements OnInit {


  @Input() horisontalAlignment: horisontalAlignment = 'left';
  @Input() verticalAlignment: verticalAlignment = 'center';
  @Input() width = 1;

  @HostBinding('style.flex-basis')
  private _flexBasisHost: string;
  @HostBinding('style.align-items')
  private _flexAlignHost: string;
  @HostBinding('style.justify-content')
  private _flexJustifyHost: string;

  private readonly defaultHorisontalAlignment: horisontalAlignment = 'left';
  private readonly defaultVerticalAlignment: verticalAlignment = 'center';
  private readonly defaultWidth = 1;

  constructor() {}

  ngOnInit() {
    this.setStyle();
  }

  private setStyle() {
    this._flexBasisHost = this.getWidth()  ;
    this._flexAlignHost = this.getHorisontalAlignment();
    this._flexJustifyHost = this.getVerticalAlignment();
  }


  getWidth(): string {
    if (this.width && this.width > 0) {
      return `${this.width * 100}%`;
    }
    console.warn(
      `Invalid value ${this.width} for width. Valid values numbers > 0. Defaulting to ${
        this.defaultWidth
      }`
    );
    return `${this.defaultWidth * 100}%`;
  }

  getHorisontalAlignment(): string {
    if (this.horisontalAlignment && horisontalAlignmentEnum[this.horisontalAlignment]) {
      return horisontalAlignmentEnum[this.horisontalAlignment];
    }
    console.warn(
      `Invalid value ${this.horisontalAlignment} for horisontalAlignment. Valid values are 'left', 'center', 'right'. Defaulting to '${
        this.defaultHorisontalAlignment
      }'`
    );
    return horisontalAlignmentEnum[this.defaultHorisontalAlignment];
  }

  getVerticalAlignment(): string {
    if (this.verticalAlignment && verticalAlignmentEnum[this.verticalAlignment]) {
      return verticalAlignmentEnum[this.verticalAlignment];
    }
    console.warn(
      `Invalid value ${this.verticalAlignment} for verticalAlignment. Valid values are 'top', 'center', 'bottom'. Defaulting to '${
        this.defaultVerticalAlignment
      }'`
    );
    return verticalAlignmentEnum[this.defaultVerticalAlignment];
  }

}
