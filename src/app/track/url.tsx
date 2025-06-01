"use client";

import { useSearchParams } from 'next/navigation'

export default function Search() {
    const searchParams = useSearchParams();

    const search = searchParams.get('trackingNumber');

    return search
}
