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




function MastersCard() {
    return (
        <Card className="m-6 border border-orange-300">
            <CardHeader>
                <CardTitle className="text-semibold text-xl">Master of Science (Technology Management)</CardTitle>
                <CardDescription className="tracking-tight">Issued by Nanyang Business School</CardDescription>
            </CardHeader>
        </Card>

    )
}

export default MastersCard;
