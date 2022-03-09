export default interface ICreateStroopDTO {
  result_id: string;
  user_id: string;
  patient_id: string;
  subnum: string;
  round: number;
  block: number;
  trial: number[];
  word: string[];
  color: string[];
  part: string;
  xpos: number[];
  ypos: number[];
  resp: number[];
  rname: string[];
  correct: number[];
  intrusion: number[];
  numresponses: number[];
  time0: number[];
  timea: number[];
  timeend: number[];
  trialtime: number[];
  responsetime: number[];
}
