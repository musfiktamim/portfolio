import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
    return (
        <div className="flex gap-2 justify-center px-1 flex-wrap">
            
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[150px] w-[300px] bg-gray-500 rounded-xl" />
            </div>
        </div>
    )
}