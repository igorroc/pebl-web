interface ITemplateVariabes {
    [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
    file: string,
    variables: ITemplateVariabes;
}