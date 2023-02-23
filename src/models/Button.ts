export interface ButtonInterface {
  name: string;
  props: () => void;
  type?: 'normal' | 'submit';
}
