import React from "react";

const Home = () => {
  return (
    <div>
      <div className="w-auto p-10 grid justify-center gap-5 items-center align-middle text-white">
        <div className="font-bold text-4xl text-center mb-8 selection:bg-white selection:text-black">My Top Links</div>
        <div className="bg-gradient-to-r sm:w-72 sm:py-2 h-16 sm:text-base flex justify-center items-center gap-2 from-purple-50 to-blue-300 hover:to-purple-50 hover:from-blue-300 text-black py-4 w-96 hover:scale-105 rounded-full text-center text-lg font-black">
            <img width="35" height="35" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github"/>
            <a href="https://github.com/RenilGarala">GITHUB PROFILE</a>
        </div>
        <div className="bg-gradient-to-r sm:w-72 sm:py-2 h-16 sm:text-base flex justify-center items-center gap-2 from-purple-50 to-blue-300 hover:to-purple-50 hover:from-blue-300 text-black py-4 w-96 hover:scale-105 rounded-full text-center text-lg font-black">
            <img width="35" height="35" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
            <a href="https://www.linkedin.com/in/renil-garala-🦾-3b1b2224a/">LINKEDIN PROFILE</a>
        </div>
        <div className="bg-gradient-to-r sm:w-72 sm:py-2 h-16 sm:text-base flex justify-center items-center gap-2 from-purple-50 to-blue-300 hover:to-purple-50 hover:from-blue-300 text-black py-4 w-96 hover:scale-105 rounded-full text-center text-lg font-black">
        <img width="28" height="28" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"/>
            <a href="https://leetcode.com/u/renilgarala360004/">LEETCODE PROFILE</a>
        </div>
        <div className="bg-gradient-to-r sm:w-72 sm:py-2 h-16 sm:text-base flex justify-center items-center gap-2 from-purple-50 to-blue-300 hover:to-purple-50 hover:from-blue-300 text-black py-4 w-96 hover:scale-105 rounded-full text-center text-lg font-black">
            <img width="32" height="32" src="https://img.icons8.com/color/48/codechef.png" alt="codechef"/>
            <a href="https://www.codechef.com/users/renilgarala">CODECHEF PROFILE</a>
        </div>
        <div className="bg-gradient-to-r sm:w-72 sm:py-2 h-16 sm:text-base flex justify-center items-center gap-2 from-purple-50 to-blue-300 hover:to-purple-50 hover:from-blue-300 text-black py-4 w-96 hover:scale-105 rounded-full text-center text-lg font-black">
            <img width="35" height="35" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
            <a href="https://www.youtube.com/@renilpatel04">YOUTUBE CHENNEL</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

