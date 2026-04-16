
import { Faq9 } from "@/components/faq9";
import { Footer30 } from "@/components/footer30";
import { Gallery17 } from "@/components/gallery17";
import { Hero85 } from "@/components/hero85";
import { Services1 } from "@/components/services1";
import { Testimonial6 } from "@/components/testimonial6";


export default function Home() {
  return (
      <main className="w-screen flex-col items-center justify-center">
        <Hero85/>
        <Services1/>
        <Testimonial6/>
        <Gallery17/>
        <Faq9/>
        <Footer30/>
      </main>
    
  );
}
