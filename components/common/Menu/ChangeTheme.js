"use client"
export default function ChangeTheme({setTheme, theme}) {
    return (
        <div>
            <button type="button"
                    className={`w-full grid place-items-center py-4 rounded-2xl mt-5 ${theme === "yellow" ? "bg-yellow text-black" : "bg-violet"}`}
                    onClick={() => setTheme((prev) => prev === "yellow" ? "violet" : "yellow")}
            >
                Zmień motyw
            </button>
        </div>
    )
}
