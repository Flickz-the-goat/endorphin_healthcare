import { AlertTriangle } from "lucide-react";

export default function Disclaimer(){
    return(
    <section className="px-5 md:px-0">
        <div className="text-neutral-900 p-8 border border-red-500 bg-red-100 rounded-xl max-w-5xl text-center mx-auto space-y-6">
            <h1 className="font-extrabold text-4xl text-red-500"> <AlertTriangle className="inline-block w-8 h-8"/> Disclaimer</h1>
            <p className="text-red-500">The content provided is for educational and informational purposes only. It is not medical advice, nor should it be used as a substitute for professional diagnosis or treatment. Always consult a licensed physician or other qualified healthcare provider with any questions regarding your health, medical condition, or treatment options. Do not ignore or delay seeking professional medical advice because of something you have read, heard, or accessed through this platform. Any reliance on the information provided is at your own risk.</p>
        </div>

    </section>
    )
}
