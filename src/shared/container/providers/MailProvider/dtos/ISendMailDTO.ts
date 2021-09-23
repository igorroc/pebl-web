import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
    email: string,
}

export default interface ISendMailDTO {
    to: IMailContact;
    from?: IMailContact;
    subject: string,
    templateData: IParseMailTemplateDTO;
}