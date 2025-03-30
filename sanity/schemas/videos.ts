import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Videos",
  description: "Contenido de los videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .max(150)
          .error("El titulo es demasiado largo o demasiado corto"),
    }),
    defineField({
      name: "description",
      title: "Descripción Corta",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .max(200)
          .error("La descripción es demasiado larga o demasiado corta"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .normalize()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]+/g, "")
            .replace(/^-+|-+$/g, "")
            .slice(0, 96),
      },
    }),
    defineField({
      name: "typecontent",
      title: "Tipo de Contenido",
      type: "reference",
      to: { type: "typecontent" },
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      validation: (rule) => rule.required().error("Debes proveer una imagen"),
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
      name: "video",
      title: "Video",
      type: "file",
      validation: (rule) => rule.required(),
      options: {
        accept: "video/mp4, video/webm, video/ogg",
      },
      fields: [
        {
          name: "duration",
          type: "number",
          title: "Duración (segundos)",
          validation: (rule) =>
            rule
              .required()
              .max(600)
              .error("El video no debe superar los 10 minutos (600 segundos)."),
        },
      ],
    }),
    defineField({
      name: "keywords",
      title: "Palabras Clave",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado en",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Contenido del Video",
      validation: (rule) => rule.required(),
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "autor.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
