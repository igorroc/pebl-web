interface IMailConfig {
    driver: 'ethereal'| 'ses';

    defaults: {
        from: {
            email: string;
            name: string;
        };
    };
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults: {
        from: {
            email: 'email@neurouesc.com.br',
            name: 'Equipe NeuroUESC',
        },
    },
} as IMailConfig;