import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import ComboboxDemo from "./combobox";
import { Badge } from "@/components/ui/badge"





function BachelorCard() {
    return (
        <Card className="m-6 border border-blue-300">
            <CardHeader className="">
                <CardTitle className="text-semibold text-xl">Bachelor of Engineering Science</CardTitle>
                <CardDescription className="tracking-tight">Specialise in any of the following engineering majors:</CardDescription>
                <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 border-0 text-white inline-block w-80 place-items-center pr-0">
                    <span className="items-center justify-center">Accredited by IES under the Washington Accord</span>
                </Badge>
            </CardHeader>
            <CardContent className="flex justify-start gap-3 items-center">
                <a>
                    in...
                </a>
                <ComboboxDemo/>
            </CardContent>
        </Card>

    )
}

export default BachelorCard;
