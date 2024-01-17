import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image'

function SchoolsCard() {
    return (
        <Card className="m-6 border border-blue-300">
            <CardHeader>
                <CardTitle className="text-semibold text-xl tracking-tight">Globally renowned universities.</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <div className="p-1">
                                    <Card className="flex aspect-square items-center justify-center">
                                        <Image
                                            src="/ucb.png"
                                            alt="UCB Logo"
                                            className="object-cover"
                                            width={400}
                                            height={400}
                                            priority
                                        />
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>

    )
}

export default SchoolsCard;
