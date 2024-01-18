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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import Image from 'next/image'

const schools = [
    { src:"/ucb.png", alt: "UCB Logo", className:"object-fill rounded-full p-3", width: 400, height: 400 },
    { src:"/ubc.png", alt: "UBC Logo", className:"object-fill p-2", width: 400, height: 400 },
    { src:"/icl.png", alt: "ICL Logo", className:"object-fill p-3", width: 400, height: 400 },
    { src:"/uot.png", alt: "UOT Logo", className:"object-cover p-3", width: 400, height: 400 },
    { src:"/uow.png", alt: "UW Logo", className:"object-cover p-3", width: 400, height: 400 }
]

function SchoolsCard() {
    return (
            <Card className="m-6 border border-blue-300">
                <CardHeader>
                    <CardTitle className="text-semibold text-xl tracking-tight">Globally renowned universities.</CardTitle>
                    <CardDescription className="tracking-tight">Click on any to find out more</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm"
                    >
                        <CarouselContent>
                            {schools.map((item, index) => (
                                <CarouselItem key={index} className="basis-1/3">
                                    <div className="p-1">
                                        <Card className="w-24 h-24 aspect-square place-items-center align-middle justify-center">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                className={item.className}
                                                width={item.width}
                                                height={item.height}
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
