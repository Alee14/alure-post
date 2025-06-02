'use client';
import { useEffect, useState } from 'react'
import Search from './url'
import Header from '../components/Header'

interface TrackData {
    sender: string;
    receiver: string;
    express: boolean;
    signature: boolean;
    abandon: boolean;
    delivered: boolean
    country_code: string;
    handler: string;
    history: { info: string, location: string, time: string }[];
}

export default function Track() {
    const [data, setData] = useState<TrackData | null>(null);
    const params = Search();
    useEffect(() => {
            async function fetchData() {
                if (params == null) return;

                const res = await fetch(`https://haystack-khaki.vercel.app/api/pkg/${params}`);
                const json = await res.json();

                setData(json);
            }
            fetchData();
        }, [params]);
    return (
        <>
            <Header title="Track" description="Tracking your packages" />
            <div className="sm:px-40 px-10 py-5 bg-zinc-800">
                <form action="/track">
                    <div className="flex flex-row gap-1">
                        <input type="text" name="trackingNumber" className="border py-2 px-2 rounded-md" placeholder="Tracking Number" />
                        <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md">Track</button>
                    </div>
                </form>
                {params ? (
                    data ? (
                        <div className="pt-2">
                            {!data.abandon && !data.delivered && (
                              <div className="p-3 bg-indigo-800 rounded-sm my-2">Package is in transit</div>
                            )}
                            {data.signature && (
                              <div className="p-3 bg-yellow-800 rounded-sm my-2">Signature is required when the package arrive</div>
                            )}
                            {data.abandon && (
                              <div className="p-3 bg-red-800 rounded-sm my-2">Package has been abandoned</div>
                            )}
                            {data.delivered && (
                                <div className="p-3 bg-green-800 rounded-sm my-2">Package has delivered</div>
                            )}
                            <div className="p-3 bg-gray-700 rounded-sm">
                                <h1 className="text-xl">Origin: {data.sender}</h1>
                                <h1 className="text-xl">Delivering to: {data.receiver}</h1>
                            </div>
                            <h1 className="text-lg my-2">Delivery progress</h1>
                            <div className="flex flex-col gap-2">
                            {[...data.history]
                                    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
                                    .map((history, idx) => (
                                        <div key={idx} className="p-3 bg-gray-700 rounded-sm">
                                            <div>{history.info}</div>
                                            <div className="text-sm">{history.location}</div>
                                            <div>{new Date(history.time).toLocaleString()}</div>
                                        </div>
                                    ))}
                            </div>

                        </div>
                    ) : "Loading..."
                ) : null}
            </div>
        </>
    )
}