export default {
    title: 'Aktualności',
    name: 'news',
    type: 'document',
    fields: [
        {
            title: 'Zdjęcie główne',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Alt zdjęcia',
            name: 'imageAlt',
            type: 'string',
        },
        {
            title: 'Tytuł',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 90,
            }
        },
        {
            title: 'Data',
            name: 'date',
            type: 'date',
        },

        {
            name: "seo",
            title: "SEO",
            type: "object",
            fields: [
                {
                    title: "Meta Title",
                    name: "metaTitle",
                    type: "string",
                },
                {
                    title: "Meta Description",
                    name: "metaDescription",
                    type: "text",
                },
                {
                    title: "Meta Keywords",
                    name: "metaKeywords",
                    type: "array",
                    of: [{type: "string"}]
                },
                {
                    title: "Canonical Tag",
                    name: "canonicalTag",
                    type: "string",
                }
            ]
        },
        {
            title: 'Opis',
            name: 'description',
            type: 'array',
            of: [
                { type: 'block' },
                {type: 'image'}
            ]
        },
        {
            title: "Publikuj",
            name: "published",
            type: "boolean",
        }
    ]
}