export default  {
title: 'Galeria',
    name: 'gallery',
    type: 'document',
    fields: [
        {
            title: 'Nagłówek',
            name: 'title',
            type: 'string',
        },
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
            title: "Zdjęcia",
            name: "images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields : [
                        {
                            title: "Zdjęcie",
                            name: "image",
                            type: "image"
                        },
                        {
                            title: "Alt zdjęcia",
                            name: "imageAlt",
                            type: "string"
                        }
                    ]

                }
            ],
            options: {
                layout: "grid"
            }
        }
    ]

}