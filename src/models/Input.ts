import {ErrorInterface} from './Error';

export interface InputInterface extends ErrorInterface {
  label: string;
  placeholder: string;
  name: string;
  props: React.Dispatch<React.SetStateAction<string>>;
}
