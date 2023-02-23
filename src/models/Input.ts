export interface InputInterface {
  label: string;
  placeholder: string;
  name: string;
  error: string;
  props: React.Dispatch<React.SetStateAction<string>>;
}
