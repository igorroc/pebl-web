export interface IFaseSternberg {
    length: number;
    set: string;
    trial: number[];
    stim: string[];
    targetfoil: string[];
    resp: string[];
    corr: number[];
    rt: number[];
  }
  
  export interface ISternbergResultDTO {
      user_id: string;
      patient_id: string;
      resultadoFinal: {
        fase1: IFaseSternberg;
        fase2: IFaseSternberg;
        fase3: IFaseSternberg;
      }
    }
  