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
import { ThreeDCardDemo } from "./Imagecard2"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function DialogDemo() {
    const imageSrc = "/aboutprofile.jpg"
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="hover:bg-rose-800">Click to know</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>
          <ThreeDCardDemo imageSrc={imageSrc}/>
          </DialogTitle>
          <DialogDescription>
          Delighted to introduce a tech enthusiast from India! 🇮🇳✨ Proficient in Front-End Development, Web Design, Software Development, and now venturing into Machine Learning and AI, there's a readiness to create digital marvels. 🚀🤖 By harmonizing HTML, CSS, Tailwind CSS, and JavaScript with C++ and Java, we aim to infuse AI magic to redefine digital landscapes. 🎶💻🌐 With an insatiable curiosity and a drive for knowledge, the focus is on turning concepts into extraordinary realities! 🌟🔍 Join us on this exhilarating journey! 🌈💫
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="text-lg">
          <GitHubLogoIcon/>
          <LinkedInLogoIcon/>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
