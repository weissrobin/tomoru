import { Navigation } from "./Navigation"
import { Hero } from "./Hero"
import { FloatingNavigation } from "@/components/FloatingNavigation";

export const Header = () => {

    return (
        <header>
            <FloatingNavigation></FloatingNavigation>
            <Navigation></Navigation>
            <Hero></Hero>
        </header>
    )
}