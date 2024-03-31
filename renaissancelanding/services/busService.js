import axios from 'axios';

const API_URL = 'https://n784k2f6s0.execute-api.ap-southeast-1.amazonaws.com/prod';

export async function getBusStopDetails() {
    try {
        const response = await axios.get(`${API_URL}/bus-stop-details`);
        return response.data;
    } catch (error) {
        console.error('Error fetching bus stop details:', error);
        return null;
    }
}

export async function getBusArrival(busStopId) {
    try {
        const response = await axios.get(`${API_URL}/bus-arrival?busStopId=${busStopId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching bus arrival:', error);
        return null;
    }
}
