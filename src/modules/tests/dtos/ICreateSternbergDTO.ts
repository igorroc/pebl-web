export default interface ICreateSternbergDTO {
  user_id: string;
  patient_id: string;
  subnum: number[];
  length: number[];
  trial: number[];
  set: string[];
  stim: string[];
  targetfoil: string[];
  resp: string[];
  corr: number[];
  rt: number[];
}
