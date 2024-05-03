"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button"
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"

export function MyDrawer() {
    const [snap, setSnap] = useState<number | string | null>("148px");
    const [open, setOpen] = useState(false);

    return (
        <Drawer.Root
            open
            modal={false}
            dismissible={false}
            snapPoints={[0.3, 0.6, 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
        >
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Portal>
                <Drawer.Content className="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                    {snap === 1 && (
                        <button
                            type="button"
                            onClick={() => setSnap(0.3)}
                            className="absolute bottom-5 right-5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-bounce w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>

                        </button>
                    )}
                    <div
                        className={clsx("flex flex-col max-w-md mx-auto w-full h-full", {
                            "overflow-y-auto": snap === 1,
                            "overflow-hidden": snap !== 1,
                        })}
                    >
                        <main className="overflow-auto p-4">
                            <div className="flex min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">

                                <form
                                    className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
                                >
                                    <Label htmlFor="message" className="sr-only">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Type your message here..."
                                        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                                    />
                                    <div className="flex items-center p-3 pt-0">
                                        <TooltipProvider delayDuration={550}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <Paperclip className="size-4" />
                                                        <span className="sr-only">Attach file</span>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="top">Attach File</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <Mic className="size-4" />
                                                        <span className="sr-only">Use Microphone</span>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="top">Use Microphone</TooltipContent>
                                            </Tooltip>
                                            <Button type="submit" size="sm" className="ml-auto gap-1.5">
                                                Send Message
                                                <CornerDownLeft className="size-3.5" />
                                            </Button>
                                        </TooltipProvider>
                                    </div>
                                </form>
                                <div className="flex-1" />
                            </div>
                        </main>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
