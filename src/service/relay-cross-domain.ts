import axios from 'axios';
import loglevel from 'loglevel';

export class CrossDomainRelay {
    constructor() { }

    async connect(url?: string) {
        try {
            const value = await axios.get('http://localhost:4000/info');
            loglevel.info(value);
        } catch (error) {
            loglevel.error(error);
        }
    }
}