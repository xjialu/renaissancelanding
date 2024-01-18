"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const specialisations = [
    {
        value: "computer science",
        label: "Computer Science",
    },
    {
        value: "computer engineering",
        label: "Computer Engineering",
    },
    {
        value: "civil engineering",
        label: "Civil Engineering",
    },
    {
        value: "aerospace engineering",
        label: "Aerospace Engineering",
    },
    {
        value: "electrical and electronic engineering",
        label: "Electrical and Electronic Engineering",
    },
    {
        value: "mechanical engineering",
        label: "Mechanical Engineering",
    },
    {
        value: "materials engineering",
        label: "Materials Engineering",
    },
    {
        value: "chemical and biomolecular engineering",
        label: "Chemical and Biomolecular Engineering",
    },
    {
        value: "environmental engineering",
        label: "Environmental Engineering",
    },
    {
        value: "bioengineering",
        label: "Bioengineering",
    },
]

export default function ComboboxDemo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="flex flex-wrap justify-between"
                >
                    {value
                        ? specialisations.find((spec) => spec.value === value)?.label
                        : "Select specialisation..."}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search specialisation..." />
                    <CommandEmpty>No specialisation found.</CommandEmpty>
                    <CommandGroup>
                        {specialisations.map((spec) => (
                            <CommandItem
                                key={spec.value}
                                value={spec.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {spec.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
