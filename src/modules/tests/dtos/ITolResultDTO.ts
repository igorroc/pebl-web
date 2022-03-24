export interface ITolResultDTO {
  patient_id: string;
  resultadoFinal: {
    trial: number[];
    size: number;
    current: string[];
    end: string[];
    step: number[]
    reset: number[];
    tries: number[];
    score: number[];
    abstime: number[];
    trialtime: number[];
    clicktime: number[];
    done: number[];
  }
}
