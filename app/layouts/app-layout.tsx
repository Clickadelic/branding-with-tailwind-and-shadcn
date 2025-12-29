export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full bg-white shadow-lg">
                <div className="container-md mx-auto">
                    <div className="flex items-center justify-between p-4">
                        <h1><a href="/" className="text-2xl font-medium text-stone-700">TW Branding</a></h1>
                        <nav>
                            <ul className="flex gap-2">
                                <li><a href="/" className="text-stone-700 text-sm">Home</a></li>
                                <li><a href="/about" className="text-stone-700 text-sm">About</a></li>
                                <li><a href="/contact" className="text-stone-700 text-sm">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <main className="grow container mx-auto">
                {children}
            </main>
            <div className="w-full bg-stone-700">
                <div className="container-md mx-auto text-center py-2">
                    <p className="text-white text-xs">All rights reserved &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </>
    );
}