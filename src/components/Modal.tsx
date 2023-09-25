import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import React from "react";

interface DialogDemoProps {
  className?: string;
  btn: string;
  dialogTitle?: string;
  dialogDescription?: string;
  children?: React.ReactNode;
  dialogFooter?: string;
}

export function Modal({
  className,
  btn,
  dialogTitle = "This is a dialog title",
  dialogDescription = "This is a dialog",
  children,
  dialogFooter = "Close",
}: DialogDemoProps) {
  return (
    <div className={className}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">{btn}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[70%] md:max-w-[65%] max-w-[90%] lg:max-w-[50%] max-h-[90%]">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter>
            <DialogPrimitive.Close>
              <Button>{dialogFooter}</Button>
            </DialogPrimitive.Close>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
