export interface IFaseStroop {
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
  
  export interface IStroopResultDTO {
      patient_id: string;
      resultadoFinal: {
        fase1: IFaseStroop;
        fase2: IFaseStroop;
        fase3: IFaseStroop;
      }
    }
  