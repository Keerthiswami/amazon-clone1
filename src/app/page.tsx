import CarouselBanner from "../app/components/CarosuelBanner";
import { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  title: "Home | Amazon Clone app",
};
  
 export default async function Home() {


  return (
    <main>
    
     <HomePage />
    </main>
  );
  }
