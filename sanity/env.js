export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-25'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rmjk3ild';

// Dane są cache'owane przez Next.js (ISR), więc zawsze pytamy o najświeższą wersję z API
export const useCdn = false

// Co ile sekund strona może odświeżyć treści z Sanity (dodatkowo działa webhook /api/revalidate)
export const revalidateSeconds = 600
