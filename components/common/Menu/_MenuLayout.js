import MobileMenu from "@/components/common/Menu/MobileMenu";
import DesktopMenu from "@/components/common/Menu/DefMenu";

// Wybór wersji menu w CSS (próg 975px jak wcześniej) – poprawne menu jest widoczne
// od pierwszego renderu, bez mignięcia wersji desktopowej na telefonie.
export default function MenuLayout() {
    return (
        <header>
            <div className={"max-[975px]:hidden"}>
                <DesktopMenu/>
            </div>
            <div className={"min-[976px]:hidden"}>
                <MobileMenu/>
            </div>
        </header>
    )
}
