import { Facebook, Instagram, Youtube } from "lucide-react"

export default function SocialMedia(){
    return(
        <div className="shadow-sm shadoww-gray-200 flex flex-col z-50 rounded-xl border border-neutral-200 p-1 bottom-0 right-0 fixed space-y-4 -translate-x-2 -translate-y-2">
            <button className="p-1 hover:cursor-pointer hover:bg-gray-100 rounded-md">
                <Instagram className="w-8 h-8 stroke-neutral-900"/>
            </button>
            <button className="p-1 hover:cursor-pointer hover:bg-gray-100 rounded-md">
                <Youtube className="w-8 h-8 stroke-neutral-900"/>
            </button>
            <button className="p-1 hover:cursor-pointer hover:bg-gray-100 rounded-md">
                <Facebook className="w-8 h-8 stroke-neutral-900"/>
            </button>



        </div>
    )
}
