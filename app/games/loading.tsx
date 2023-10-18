import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
    return (<main className="m-24 rounded-md grid grid-cols-4 gap-12">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
            <div key={id} className="bg-white p-8 col-span-4 md:col-span-2 lg:col-span-1">
                <Skeleton className="h-6 w-1/2 bg-gray-200 mb-2" />                
                <Skeleton className="h-6 w-1/4  mb-4" />
                <Skeleton className="h-24 rounded-md w-full bg-gray-400" />    
                
            </div>
        ))}
    </main>)
}