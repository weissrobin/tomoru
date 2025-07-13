import { Navigation } from "./Navigation"
import { FloatingNavigation } from "./FloatingNavigation"

export const HeaderSub = () => {
    return (
        <header>
            <FloatingNavigation />
            <Navigation />
        </header>
    )
}