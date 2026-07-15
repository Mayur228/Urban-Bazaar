import { HeaderActions } from "./components/HeaderActions";
import { HeaderNav } from "./components/HeaderNav";
import { HeaderTitle } from "./components/HeaderTitle";

export function Header() {
    return (
        <header className="sticky z-50 border-b border-border bg-surface/90 backdrop-blur-md">
            <div className="w-full flex h-20 items-center justify-between px-4 lg:px-8">
                <HeaderTitle />
                <HeaderNav />
                <HeaderActions
                    isDark={true}
                    onCart={
                        () => { }
                    }
                    onCloseSearch={
                        () => { }
                    }
                    onProfile={
                        () => { }
                    }
                    onToggleSearch={
                        () => { }
                    }
                    onToggleTheme={
                        () => { }
                    }
                    onWishList={
                        () => { }
                    }
                    showSearch={false}
                />
            </div>
            
        </header>
    )
}