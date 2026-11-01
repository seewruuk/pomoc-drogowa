// Wstrzykuje dane strukturalne schema.org do HTML (renderowane na serwerze).
export default function JsonLd({data}) {
    if (!data) return null;
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}}
        />
    );
}
