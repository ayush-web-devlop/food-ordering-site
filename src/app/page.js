
import Hero from '@/components/layout/Hero'
import SectionHeaders from '../components/layout/SectionHeaders'
import HomeMenu from '@/components/layout/HomeMenu'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <p className="max-w-2xl mx-auto mt-4 text-gray-500">
          In the lively city of Mumbai, where the streets are alive with chatter and the aroma of street food, there was a popular pizzeria called Bella Pizzas. Bella, the owner, had a special talent for crafting pizzas with a perfect blend of traditional and innovative toppings. Her pizzas were the talk of the town, loved by everyone who tasted them.

          One evening, Neha, a busy software engineer, was stuck at her desk with a mountain of work and no time to cook. She had a craving for Bella famous Margherita pizza but knew she wouldn make it to the pizzeria before closing time. Neha wished there was a way to enjoy her favorite pizza without leaving her apartment.

          That when she heard about Foody, a new food delivery service that had just launched in Mumbai. She quickly opened the Foody app and, to her delight, found Bella Pizzas listed. With a few taps, she ordered a large Margherita pizza and a side of cheesy garlic bread.

          In under an hour, a Foody delivery driver arrived at Neha door with a smile and a warm box of pizza. The moment Neha opened the box, the delicious smell of fresh basil and melted cheese filled her apartment. She took her first bite and was instantly reminded of the cozy atmosphere of Bella Pizzas.

          As Neha enjoyed her meal, she felt a wave of relief and satisfaction. Her long day was suddenly brighter thanks to Foody quick delivery and Bella amazing pizza. Soon, her colleagues and friends started using Foody, and Bella Pizzas became a favorite choice for those busy days when dining out wasn an option.

          Bella was thrilled to see her pizzas reaching more people, making their days a bit more enjoyable. Thanks to Foody, Mumbai pizza lovers could indulge in their favorite slices without missing a beat, turning ordinary evenings into deliciously memorable moments.
      </p>
      </section>
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <p className="underline text-gray-600">+91 1002003005</p>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-8">
        &copy; 2024 all rights reserved
      </footer>
    </>
  );
}
