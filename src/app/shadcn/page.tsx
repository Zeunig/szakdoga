
import { Combobox } from "@/components/Combobox";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Page(){
    return(
        <div className="p-4 grid grid-cols-4">

            <div className="bg-black">
            </div>
            <div>
                <HoverCard>
                    <HoverCardTrigger>Huzd ide az egered</HoverCardTrigger>
                    <HoverCardContent>surprise</HoverCardContent>
                </HoverCard>
            </div>
            <Combobox/>        
            <div>
                <Drawer>
                    <DrawerTrigger>Megnyitás</DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Fiók cím</DrawerTitle>
                        </DrawerHeader>
                        <DrawerFooter>
                            <p>Egy- egy almafa</p>
                            <p>Kettő- Két latica</p>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="h-[200px]">
                <ResizablePanelGroup direction="horizontal" >
                    <ResizablePanel className="bg-green-600">
                    <ResizablePanelGroup direction="vertical" >
                    <ResizablePanel className="bg-green-600">
                        Panel 1
                    </ResizablePanel>
                    <ResizableHandle/>
                    <ResizablePanel className="bg-green-900">
                        Panel 2
                    </ResizablePanel>
                </ResizablePanelGroup> 
                    </ResizablePanel>
                    <ResizableHandle/>
                    <ResizablePanel className="bg-green-900">
                    <ResizablePanelGroup direction="vertical" >
                    <ResizablePanel className="bg-green-600">
                        Panel 1
                    </ResizablePanel>
                    <ResizableHandle/>
                    <ResizablePanel className="bg-green-900">
                        Panel 2
                    </ResizablePanel>
                </ResizablePanelGroup> 
                    </ResizablePanel>
                </ResizablePanelGroup> 
            </div>

        </div>
    )
}