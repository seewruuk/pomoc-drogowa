// Panel Sanity Studio – nie indeksujemy go w wyszukiwarkach
export const metadata = {
    title: "Panel treści",
    robots: {index: false, follow: false},
};

export default function StudioLayout({children}) {
    return children;
}
