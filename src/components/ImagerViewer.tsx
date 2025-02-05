"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import * as React from "react"
import Image from "next/image";

export function ImageViewer() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(50)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(count);
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-auto h-auto bg-cyan-600 bg-opacity-55">
        <DialogTitle></DialogTitle>

        <div className="w-auto h-auto">
          <Carousel setApi={setApi} className="w-auto h-auto -ml-40">
            <CarouselContent className="bg-cyan-600 bg-opacity-55">
              {Array.from({ length: count }).map((_, index) => (
                <CarouselItem key={index} className="bg-cyan-600 bg-opacity-55">
                  <Image src="/r8.jpg" width={800} height={800} alt="Picture of the author" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 -ml-40 text-center text-sm text-muted-foreground">
            {current}/{count}
          </div>
        </div>

      </DialogContent>
    </Dialog>
  )
}