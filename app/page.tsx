
import { CallNowButton } from "@/components/call-now-button";
import { Contact } from "@/components/contact";
import { Faq9 } from "@/components/faq9";
import { Footer30 } from "@/components/footer30";
import { Gallery17 } from "@/components/gallery17";
import { Hero85 } from "@/components/hero85";
import { Services1 } from "@/components/services1";
import { Testimonial6 } from "@/components/testimonial6";


export default function Home() {
  return (
      <main id="main-content" className="w-screen flex-col items-center justify-center">
        <section id="home"><Hero85/></section>
        <section id="services"><Services1/></section>
        <section id="testimonials"><Testimonial6/></section>
        <section id="gallery"><Gallery17/></section>
        <section id="faq"><Faq9/></section>
        <section id="contact"><Contact/></section>
        <Footer30/>
        <CallNowButton phoneNumber="tel:+353872345678" />
      </main>
    
  );
}
