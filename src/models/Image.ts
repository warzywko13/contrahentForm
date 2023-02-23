export interface imageInterface {
  base64: string | undefined;
  type: string | undefined;
  fileName: string | undefined;
  width: number | undefined;
  height: number | undefined;
}

export interface GetImgInterface {
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
  error: string;
}
