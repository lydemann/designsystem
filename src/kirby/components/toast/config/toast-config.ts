import { ThemeColor } from './../../../helpers/theme-color.type';

export interface ToastConfig {
  message?: string;
  position?: 'top' | 'bottom' | 'middle';
  duration?: number;
  cancelBtnText?: string;
  themeColor?: ThemeColor;
}