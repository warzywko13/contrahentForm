import {ButtonStandard, ButtonSubmit} from '../const/Settings';

export interface ButtonInterface {
  name: string;
  props: () => void;
  type?: 'normal' | 'submit';
}
