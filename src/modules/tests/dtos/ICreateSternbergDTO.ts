export default interface ICreateSternbergDTO {
  result_id: string;
  user_id: string;
  patient_id: string;
  subnum: string;
  length: number;
  trial: number[];
  set: string;
  stim: string[];
  targetfoil: string[];
  resp: string[];
  corr: number[];
  rt: number[];
}
