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
            <CardHeader>
                <CardTitle>Bachelor of Engineering Science</CardTitle>
                <CardDescription>Specialise in any of the following engineering majors:</CardDescription>
                <Badge className="bg-gradient-to-r from-orange-400 to-yellow-400 w-22 border-0">Accredited by IES under the Washington Accord</Badge>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
                <a>
                    in...
                </a>
                <ComboboxDemo/>
            </CardContent>
        </Card>

    )
}

export default BachelorCard;
