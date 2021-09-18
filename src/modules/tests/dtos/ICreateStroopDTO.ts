export default interface ICreateStroopDTO {
    user_id: string;
    subnum: number[];
    round: number[];
    block: number[];
    trial: number[];
    word: number[];
    color: string[];
    part: string[];
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
