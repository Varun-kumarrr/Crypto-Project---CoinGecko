import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";


function CoinTable({currency}) {
    const [page, setPage] = useState(1);
    const [currencySymbol , setCurrencySymbol ] = useState('$');
    useEffect(()=>{
        if(currency==='usd')
        {
            setCurrencySymbol('$');
        }
        if(currency==='inr')
        {
            setCurrencySymbol('₹');
        }
    },[currency])
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['coin', page , currency],
        queryFn: () => fetchCoinData(page, currency),
        retry: 2,
        retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });
    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto mt-20">
            <div className="w-full bg-secondary text-black flex py-4 px-2 font-semibold items-center justify-center">
                <div className="basis-[35%]">Coin</div>
                <div className="basis-[25%]">Price</div>
                <div className="basis-[20%]">24h change</div>
                <div className="basis-[20%]">Market Cap</div>
            </div>
            <div className="flex flex-col mx-auto w-[80vw]">
                {isLoading && <div>Loading...</div> }
                {data && data.map((coin) => {
                    return (
                        <div key={coin.id}
                            className="w-full bg-transparent text-black flex py-4 px-2 font-semibold justify-between items-center"
                        >
                            <div
                                className="flex items-center justify-start gap-3 basis-[35%]"
                            >
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} alt="Coin image" className="w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>
                            <div className="basis-[25%]">
                                {currencySymbol}{coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                {currencySymbol}{coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {currencySymbol}{coin.market_cap}
                            </div>
                        </div>

                    );
                })}
            </div>
            <div className="flex gap-4 justify-center items-center">
                <button 
                disabled = {page===1}
                onClick={()=>setPage(page-1)}
                className="btn btn-primary btn-wide text-2xl text-black"
                >Prev</button>
                <button 
                onClick={()=>setPage(page+1)}
                className="btn btn-secondary btn-wide text-2xl text-black"
                >Next</button>
            </div>
        </div>
    );
}

export default CoinTable;