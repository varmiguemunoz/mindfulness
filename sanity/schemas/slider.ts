import { defineField, defineType } from "sanity";

export default defineType({
  name: "slider",
  title: "Slider",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Imagen Slider",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "buttonTitle",
      title: "título del boton",
      type: "string",
    }),

    defineField({
      name: "url",
      title: "Url del episodio",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
