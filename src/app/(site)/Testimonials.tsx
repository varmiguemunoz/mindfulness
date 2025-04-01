import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jack F.",
      rating: 5,
      text: "This platform has completely transformed my mindfulness practice! The guided sessions are immersive, and I feel more present and at peace every day.",
      avatar:
        "https://pbs.twimg.com/profile_images/1784563357300740096/2DyzEa9d_400x400.jpg",
    },
    {
      name: "Larry",
      rating: 5,
      text: "I love how seamless and calming the experience is. The variety of meditation techniques and breathing exercises has truly helped me manage stress better.",

      avatar:
        "https://pbs.twimg.com/profile_images/1804234365817212928/n077GepN_400x400.jpg",
    },
    {
      name: "Gabriel",
      rating: 5,
      text: "Finally, a mindfulness platform that understands my needs! The HD guided sessions, soothing music, and structured programs make it the perfect choice for my daily practice.",

      avatar:
        "https://pbs.twimg.com/profile_images/1757317042644918272/z22hY3Ji_400x400.jpg",
    },
  ];

  return (
    <div id="wall-of-love" className="bg-lightGray/15 text-black/80 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What our customers say
          </h1>
          <p className="text-gray-400 text-lg">
            They made the decision to join us and have no regrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-lavender/80 p-6 flex flex-col">
              <div className="flex-grow">
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-softSky text-softSky"
                      />
                    ))}
                  </div>
                )}

                <p
                  className="text-white font-medium mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white mt-auto">
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
                  <h3 className="font-semibold text-base text-white">
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
