export interface Param {
  [prop: string]: string | Blob;
};
export interface Res {
  code: number;
  data: any;
  message: string;
}
export interface HelpMap {
  [prop: string]: string;
}
