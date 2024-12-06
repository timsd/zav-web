import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from 'lucide-react'

export function Chat({ showChat, setShowChat }) {
  return (
    <>
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[var(--color-orange)] text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Chat with us</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowChat(false)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <p className="mb-4">How can we help you today?</p>
            <Input type="text" placeholder="Type your message..." className="mb-2" />
            <Button className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)]">Send</Button>
          </div>
        </div>
      )}
    </>
  )
}
