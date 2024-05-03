const API_URL = process.env.API_URL || 'https://timeapi.io/api/Time/current/zone';
const TIME_ZONE = process.env.TIME_ZONE || 'Europe/Amsterdam';

import { CapacitorHttp } from '@capacitor/core';

export async function fetchTime() {
    const options = {
        url: API_URL,
        params: {
            timeZone: 'Europe/Amsterdam'
        },
        headers: {
            'accept': 'application/json'
        }
    };
    const response = await CapacitorHttp.get(options);

    return response.data;
}