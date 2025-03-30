import { defineField, defineType } from "sanity";

export default defineType({
  name: "bannerblog",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Imagen Banner Principal",
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
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare(selection) {
      return {
        title: "Banner Blog Image",
        media: selection.media,
      };
    },
  },
});
