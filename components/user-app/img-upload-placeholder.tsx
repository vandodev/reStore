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

export function ImageUploadPlaceHolder() {

    const HandleDialogOpenChange = async (e:boolean) =>{
        console.log(e)
    }

  return (
    <div className="flex h-[200px] w-full shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 text-muted-foreground"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="11" r="1" />
          <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
          <path d="M17 18.5a9 9 0 1 0-10 0" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">Just add</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
            The photo you add will be enhanced by IA.
        </p>
        <Dialog onOpenChange={HandleDialogOpenChange}>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Bring your past to life
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Photo</DialogTitle>
              <DialogDescription>
                Drag a photo in order to Upload & Enhanced.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
               {/*TODO: Component upload */}
              </div>
            </div>
            <DialogFooter>
              <Button>Enhance</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}