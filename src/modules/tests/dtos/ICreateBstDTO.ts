export default interface ICreateBstDTO {
  result_id: string;
  user_id: string;
  patient_id: string;
  subnum: string;
  type: string;
  block: number;
  congruency: number[];
  trial: number[];
  stim: number[];
  resp: string[];
  corr: number[];
  rt: number[];
  tooslow: number[];
}
