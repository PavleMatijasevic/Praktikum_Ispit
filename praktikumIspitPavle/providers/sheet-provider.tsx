"use client"

import { useMountedState } from "react-use";

export const SheetProvider = () => {

    const jeMounted = useMountedState();
    if (!jeMounted) return null;

    return(
        <>
            
        </>
    )
}