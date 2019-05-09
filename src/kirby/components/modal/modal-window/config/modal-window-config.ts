export interface ModalWindowConfig {
  title: string;
  titleHorizontalAlignment?: 'left' | 'center';
  closeIconName?: 'close' | 'arrow-back';
  dim?: number;
  component: any;
}