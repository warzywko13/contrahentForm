export interface RegisterAfterInterface {
  id: number;
  name: string;
}

export interface RegisterAfterListInterface {
  data: RegisterAfterInterface[];
  label: string;
  handleRegisterAfter: (id: number) => void;
  registerAfter: number;
}

export interface RegisterAfterItem extends RegisterAfterInterface {
  registerAfter: number;
  handleRegisterAfter: (id: number) => void;
}
