'use client'

import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar"
import { fetchTime } from '@/app/lib/data';

export default function Calendar1() {
    const [date, setDate] = useState<Date | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const { year, month, day, hour, minute, seconds, milliSeconds } = await fetchTime();
            const dateInfo = new Date(year, month - 1, day, hour, minute, seconds, milliSeconds);
            setDate(dateInfo);
        };
        fetchData();
    }, []);

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
    );
}