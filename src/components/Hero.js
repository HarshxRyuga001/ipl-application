import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";
import Button from "./ui/Button";
export default function Hero() {
  return (
    <div className="relative overflow-hidden py-[50px] md:py-[28px] bg-gradient-to-b from-orange-200 to-blue-300">
      <div className="container mx-auto px-[4px] relative z-10">
        <div className="text-center max-width-3xl mx-auto">
          <div className="text-center text-[30px] md:text-[25px] font-bold text-gray-900 mb-[6px]">
            IPL 2025{" "}
            <span className="text-yellow-400">Live Score By Harsh</span>
          </div>
          <p className="text-[18px] text-black-700 mb-8">
            This is a IPL Score Tracker created by Harsh Marathe using React.Js.
            You will be able to see the live score and schedule of the ipl
            matches here.
          </p>

          <div className="flex flex-wrap justify-center gap-[5px]">
            <Button variant="primary" size="lg">
              Live Score
            </Button>

            <Button variant="outline" size="lg">
              Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Bat */}
      <div className="absolute top-20 right-[10%] w-[16px] h-[16px] rounded-full bg-red-600 " />
      <div className="absolute bottom-10 left-[5%] w-[8px] h-[64px] bg-gradient-to-b from-amber-900 to-amber-700 rounded-b-lg " />
    </div>
  );
}
