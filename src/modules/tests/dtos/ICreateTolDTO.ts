export default interface ICreateTolDTO {
  result_id: string;
  user_id: string;
  patient_id: string;
  sub: string;
  trial: number[];
  size: number;
  current: string[];
  end: string[];
  step: number[];
  reset: number[];
  tries: number[];
  score: number[];
  abstime: number[];
  trialtime: number[];
  clicktime: number[];
  done: number[];
}
