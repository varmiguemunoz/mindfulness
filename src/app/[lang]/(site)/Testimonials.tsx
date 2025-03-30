import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jack F.",
      rating: 5,
      text: "Hentify has completely changed my experience! The quality is amazing, no ads, and a huge collection. Totally worth it!",
      avatar:
        "https://pbs.twimg.com/profile_images/1784563357300740096/2DyzEa9d_400x400.jpg",
    },
    {
      name: "Larry",
      rating: 5,
      text: "I love how smooth and fast the streaming is. The download feature is a game-changer! Best hentai platform out there.",

      avatar:
        "https://pbs.twimg.com/profile_images/1804234365817212928/n077GepN_400x400.jpg",
    },
    {
      name: "Gabriel",
      rating: 5,
      text: "Finally, a platform that understands what we want! The subtitles, the HD quality </span>and the private browsing make Hentify the best choice",

      avatar:
        "https://pbs.twimg.com/profile_images/1757317042644918272/z22hY3Ji_400x400.jpg",
    },
  ];

  return (
    <div id="wall-of-love" className=" bg-[#0F0F0F] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            what our customers say
          </h1>
          <p className="text-gray-400 text-lg">
            They made the decision to join us and have no regrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-[1.4px] border-zinc-800 p-6 flex flex-col"
            >
              <div className="flex-grow">
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D982CA] text-[#D982CA]"
                      />
                    ))}
                  </div>
                )}

                <p
                  className="text-gray-300 mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-700 mt-auto">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-base text-zinc-300">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
