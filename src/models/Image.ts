import {ErrorInterface} from './Error';

export interface ImageInterface {
  base64: string | undefined;
  type: string | undefined;
  fileName: string | undefined;
  width: number | undefined;
  height: number | undefined;
}

export interface GetImgInterface extends ErrorInterface {
  label: string;
  name: string;
  image: {
    base64: string | undefined;
    type: string | undefined;
    fileName: string | undefined;
    width: number | undefined;
    height: number | undefined;
  };
  setImage: React.Dispatch<
    React.SetStateAction<{
      base64: string | undefined;
      type: string | undefined;
      fileName: string | undefined;
      width: number | undefined;
      height: number | undefined;
    }>
  >;
}
