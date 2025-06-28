import axiosINstance from '../helpers/axiosInstances';

export async function fetchCoinData()
{
    try {
        const response = await axiosINstance.get('/coins/markets?vs_currency=usd');
        console.log(response);
        return response;
        
    } catch (error) {
        console.error(error);
        return null;
        
    }
}