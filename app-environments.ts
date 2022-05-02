import logger  from 'loglevel';

export interface IEnvs {
    PORT: string;
    logLevel: string;
}

export interface IServiceEnvs extends IEnvs {
    SERVICE_JWT: string;
}

export class ApplicationEnvironment {
    static IDP_ENV_STORE: IEnvs;
    static SERVICE_ENV_STROE: IServiceEnvs;
    constructor(){
        logger.warn("Application Environment.");
        ApplicationEnvironment.IDP_ENV_STORE = this.validateAndSetupIDPEnvs();
        ApplicationEnvironment.SERVICE_ENV_STROE = this.validateAndSetupServiceEnvs();
    }

    validateAndSetupIDPEnvs(iEnv = process.env):IEnvs{
        const applicationEnvs:IEnvs = {
            PORT: iEnv.IDP_PORT,
            logLevel: iEnv.logLevel
        }
        return applicationEnvs;
    }

    validateAndSetupServiceEnvs(iEnv = process.env):IServiceEnvs{
        const applicationEnvs:IServiceEnvs = {
            PORT: iEnv.SERVICE_P_PORT,
            logLevel: iEnv.logLevel,
            SERVICE_JWT: iEnv.SERVICE_PROVIDER_JWT_KEY
        }
        return applicationEnvs;
    }
}