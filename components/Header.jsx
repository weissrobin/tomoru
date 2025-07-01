import { Navigation } from "./Navigation"
import { Hero } from "./Hero"
import { FloatingNavigation } from "@/components/FloatingNavigation";

export const Header = () => {
    return (
        <header className='border-b-2 min-h-screen mx-auto'>
            <FloatingNavigation></FloatingNavigation>
            <Navigation></Navigation>
            <Hero></Hero>
        </header>
    )
}