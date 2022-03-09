export interface IFaseBst {
  type: string;
  block: number;
  tempo: number[];
  corr: number[];
  trial: number[];
  stim: number[];
  resp: string[];
  congruency: number[];
  rt: number[];
  tooslow: number[];
}

export interface IBstResultDTO {
    patient_id: string;
    resultadoFinal: {
      fase1: IFaseBst;
      fase2: IFaseBst;
      fase3: IFaseBst;
      fase4: IFaseBst;
      fase5: IFaseBst;
    }
  }
