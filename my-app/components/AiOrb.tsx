"use client";
import { useEffect } from "react";

export default function AiOrb() {
    useEffect(() =>{
    const frame = document.getElementById("assistantFrame");
    frame!.addEventListener("load", () => {
        navigator.permissions.query({ name: "microphone" }).then((result) => {
            if (result.state === "granted") {
                console.log("Microphone access already granted");
            } else if (result.state === "prompt") {
                console.log("User will be prompted for microphone access");
            }
        });
    });
    }, [])

    return (
        <>
            <div className="flex justify-center items-center">
                <iframe
                    src="https://iframes.ai/o/1754925931660x260603219705331700?color=15a18e&icon=mic"
                    allow="microphone"
                    className="w-full h-[200px] border-none"
                    id="assistantFrame"
                ></iframe>
            </div>
        </>
    );
}
