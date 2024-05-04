import { CapacitorHttp } from '@capacitor/core';

export async function fetchTime() {
    const options = {
        url: '/api/Time/current/zone',
        params: {
            timeZone: 'Europe/Amsterdam'
        },
        headers: {
            accept: 'application/json'
        }

    };
    const response = await CapacitorHttp.get(options);

    return response.data;
}