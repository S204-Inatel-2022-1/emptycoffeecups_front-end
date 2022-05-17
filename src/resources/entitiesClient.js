import client from './config';

const path = '/clients/gift';

const Client = {
    async createUser(data) {
        try {
            const response = await client.post(
                path,
                data,            
            );
            return response;
        } catch (e) {
            return e;
        }
    },
    async getGifts(data) {
        try {
            const response = await client.get(
                path,
                data,            
            );
            return response;
        } catch (e) {
            return e;
        }
    },
}

export default Client;
