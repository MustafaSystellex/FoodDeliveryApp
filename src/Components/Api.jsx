import axios from "axios";

const baseUrl = 'https://jrqim8am3h.us-east-1.awsapprunner.com/api/v1/restaurant/subway';

export const getFoodData = async () => {
    try {
        const response = await axios.get(baseUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
        
    } catch (error) {
        console.error('Error fetching food data:', error.message);
        console.error('Error details:', error);
        throw error;
    }
};
