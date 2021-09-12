export default interface ICreateTestDTO {
    user_id: string;
    deadline: Date[];
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