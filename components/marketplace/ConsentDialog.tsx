'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface ConsentDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (e: React.FormEvent) => void
}

export function ConsentDialog({ isOpen, onOpenChange, onSubmit }: ConsentDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Consent Form</DialogTitle>
          <DialogDescription>
            Please read and agree to the following terms before proceeding with your design purchase.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="text-sm">
              By agreeing to these terms, you acknowledge that:
              <ul className="list-disc pl-5 mt-2">
                <li>You will make an initial 30% payment to engage the designer, or choose to pay 100% upfront.</li>
                <li>If choosing the 30% option, the remaining 70% will be due upon completion and your approval of the design.</li>
                <li>Unauthorized use of the designer's work without full payment is strictly prohibited.</li>
                <li>Legal action may be taken for any violation of these terms, resulting in potential fines.</li>
              </ul>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="text-sm font-medium leading-none">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">Agree and Continue</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
