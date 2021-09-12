export default interface ICreateBstDTO {
    user_id: string;
    deadline: Date[];
    subnum: number[];
    type: string[];
    block: number[];
    congruency: number[];
    trial: number[];
    stim: number[];
    resp: string[];
    corr: number[];
    rt: string[];
    tooslow: number[];
}