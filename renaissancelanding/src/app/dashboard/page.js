"use client"

import React, { useEffect, useState } from 'react';
import { getBusStopDetails, getBusArrival } from '../../../services/busService';

export default function Dashboard() {
    const [busStopDetails, setBusStopDetails] = useState(null);
    const [busArrival, setBusArrival] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const details = await getBusStopDetails();
            setBusStopDetails(details);
        }

        fetchData();
    }, []);

    return (
        <main className="h-screen overflow-hidden flex items-center justify-center">
            <div>
                <h1>NTU Shuttle Bus Live Updates</h1>
                {busStopDetails && (
                    <div>
                        <h2>Bus Stop Details</h2>
                        <pre>{JSON.stringify(busStopDetails, null, 2)}</pre>
                    </div>
                )}
                {busArrival && (
                    <div>
                        <h2>Bus Arrival</h2>
                        <pre>{JSON.stringify(busArrival, null, 2)}</pre>
                    </div>
                )}
            </div>
        </main>
    );
}
