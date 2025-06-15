import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navegação</SheetTitle>
          </SheetHeader>
          <nav className="mt-4 flex flex-col gap-4">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/contactos">Contactos</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
