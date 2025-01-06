// "use client";
// import {
//   Eye,
//   Heart,
//   ImageIcon,
//   Share,
//   Star,
//   StarHalf,
//   ThumbsUp,
// } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { DialogTitle } from "@radix-ui/react-dialog";

// const TripHeading = ({ data }) => {
//   const [selectedImage, setSelectedImage] = useState("/images/1.png");
//   const images = [
//     "/images/1.png",
//     "/images/2.png",
//     "/images/3.png",
//     "/images/4.png",
//     "/images/5.png",
//   ];
//   return (
//     <div className="pt-16 sm:pt-20 pb-10 bg-white">
//       <div className="hidden sm:grid grid-cols-12 grid-rows-5 gap-x-2 gap-y-3 h-[400px] max-w-[1200px] mx-auto my-6">
//         <span className="flex items-center justify-center overflow-hidden col-span-6 row-span-5 rounded-l-lg">
//           <Image
//             alt="grid-trips-1"
//             src="/images/1.png"
//             width={550}
//             height={370}
//             className="object-cover w-full h-full"
//           />
//         </span>
//         <span className="flex items-center justify-center overflow-hidden col-span-3 row-span-3 ">
//           <Image
//             alt="grid-trips-2"
//             src="/images/2.png"
//             width={280}
//             height={220}
//             className="object-cover w-full h-full"
//           />
//         </span>
//         <span className="flex items-center justify-center overflow-hidden col-span-3 row-span-3 rounded-tr-lg">
//           <Image
//             alt="grid-trips-3"
//             src="/images/3.png"
//             width={280}
//             height={220}
//             className="object-cover w-full h-full"
//           />
//         </span>
//         <span className="flex items-center justify-center overflow-hidden col-span-2 row-span-2">
//           <Image
//             alt="grid-trips-4"
//             src="/images/4.png"
//             width={170}
//             height={140}
//             className="object-cover w-full h-full"
//           />
//         </span>
//         <span className="flex items-center justify-center overflow-hidden col-span-2 row-span-2">
//           <Image
//             alt="grid-trips-5"
//             src="/images/5.png"
//             width={170}
//             height={140}
//             className="object-cover w-full h-full"
//           />
//         </span>
//         <span className="flex items-center justify-center overflow-hidden col-span-2 row-span-2 rounded-br-lg">
//           <Dialog>
//             <DialogTrigger className="h-full w-full">
//               <Image
//                 alt="grid-trips-6"
//                 src="/images/6.png"
//                 width={170}
//                 height={140}
//                 className="object-cover w-full h-full"
//               />
//             </DialogTrigger>
//             <DialogContent className="bg-transparent flex flex-col gap-2 items-center justify-center border-none w-[80vw] max-w-[80vw] min-h-[60vh]">
//               <DialogTitle>Gallery</DialogTitle>
//               <div className="w-full h-full flex items-center justify-center">
//                 {selectedImage && (
//                   <Image
//                     src={selectedImage}
//                     alt={"main"}
//                     height={500}
//                     width={600}
//                     className="w-full object-contain h-auto max-h-[60vh]"
//                   />
//                 )}
//               </div>
//               <div className="flex items-center gap-2 justify-center">
//                 {images.map((item: string, index: number) => (
//                   <button
//                     onClick={() => setSelectedImage(item)}
//                     className={`w-full h-full rounded-md relative ${
//                       selectedImage === item
//                         ? " border-2 border-main border-solid overflow-clip"
//                         : ""
//                     }`}
//                     key={index}
//                   >
//                     {selectedImage === item && (
//                       <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
//                         <Eye />
//                       </span>
//                     )}

//                     <Image
//                       src={item}
//                       alt="thumbnails"
//                       width={250}
//                       height={150}
//                       className={`h-[120px] w-[200px] ${
//                         selectedImage === item && "blur"
//                       }`}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </DialogContent>
//           </Dialog>
//         </span>
//       </div>
//       <div className="flex items-center justify-center sm:hidden relative">
//         <Dialog>
//           <DialogTrigger className="h-full w-full">
//             <Image
//               src={"/images/1.png"}
//               alt="mobile-v"
//               className="h-full w-full max-h-[300px] aspect-square object-cover"
//               width={400}
//               height={300}
//             />
//           </DialogTrigger>
//           <DialogContent className=" bg-transparent border-none p-0">
//             <DialogTitle></DialogTitle>
//             <div className="flex flex-row items-center justify-center overflow-x-auto ">
//               {images.map((item, index) => (
//                 <Image
//                   src={item}
//                   key={index}
//                   alt="trip image"
//                   width={400}
//                   height={350}
//                   className="h-auto w-screen object-contain flex-shrink-0"
//                 />
//               ))}
//             </div>
//           </DialogContent>
//         </Dialog>

//         <span className="size-[32px] rounded-full bg-white text-[#121212] absolute top-4 right-4 grid place-items-center">
//           <Heart size={20} />
//         </span>
//         <span className="size-[32px] rounded-full bg-white text-[#121212] absolute top-4 right-14 grid place-items-center">
//           <Share size={20} />
//         </span>
//         <span className="absolute bottom-4 right-4 text-[#121212] bg-white rounded-sm px-2 py-1 h-[32px] w-[64px] text-sm flex items-center gap-1">
//           <ImageIcon size={18} className="flex-shrink-0" />{" "}
//           <p className="flex items-center">1/24</p>
//         </span>
//       </div>
//       <div className="flex flex-col gap-2 max-w-[1200px] mx-auto mt-6 px-3 sm:p-0">
//         <span className="flex flex-row items-start justify-between">
//           <h1 className="font-bold text-2xl sm:text-5xl text-[#121212]">
//             Everest Base Camp Heli Trek - 8 Days
//           </h1>
//           <span className="hidden sm:flex items-center gap-6">
//             <button className="flex items-center gap-2 font-medium text-[#121212]">
//               <Share size={20} />
//               <p className="underline">Share</p>
//             </button>
//             <button className="flex items-center gap-2 font-medium text-[#121212]">
//               <Heart size={20} />
//               <p className="underline">Save</p>
//             </button>
//           </span>
//         </span>
//         <span className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
//           <span className="flex items-center gap-1 text-[#121212]">
//             <Star size={16} />
//             <Star size={16} />
//             <Star size={16} />
//             <Star size={16} />
//             <StarHalf size={16} />
//             <span className="flex items-center gap-1 text-[#121212]">
//               <p className="underline">2630 reviews</p>
//               <p>in TripAdvisor</p>
//             </span>
//           </span>
//           <span className="flex items-center gap-2 text-[#121212]">
//             <ThumbsUp size={16} />
//             Recommended by 99% of travelers
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default TripHeading;

"use client";
import {
  Eye,
  Heart,
  ImageIcon,
  Share,
  Star,
  StarHalf,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const TripHeading = ({ data }: any) => {
  // Extract image URLs from the description markdown
  const extractImageUrls = (description: string) => {
    const regex = /!\[.*?\]\((.*?)\)/g;
    const matches = [...description.matchAll(regex)];
    return matches.map((match) => match[1]);
  };

  const fetchImages = extractImageUrls(data.description);

  // console.log(fetchImages);

  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Extract title from description
  const title =
    data.description
      ?.split("\n")
      ?.find((line: string) => line.includes("|"))
      ?.trim() || data.name;

  return (
    <div className="pt-16 sm:pt-20 pb-10 bg-white">
      <div className="hidden sm:grid grid-cols-12 grid-rows-5 gap-x-2 gap-y-3 h-[400px] max-w-[1200px] mx-auto my-6">
        {images.slice(0, 6).map((image: string, index: number) => {
          const gridSpans = [
            "col-span-6 row-span-5 rounded-l-lg",
            "col-span-3 row-span-3",
            "col-span-3 row-span-3 rounded-tr-lg",
            "col-span-2 row-span-2",
            "col-span-2 row-span-2",
            "col-span-2 row-span-2 rounded-br-lg",
          ];

          return (
            <span
              key={index}
              className={`flex items-center justify-center overflow-hidden ${gridSpans[index]}`}
            >
              {index === 5 ? (
                <Dialog>
                  <DialogTrigger className="h-full w-full">
                    <Image
                      alt={`grid-trips-${index + 1}`}
                      src={image}
                      // @ts-ignore
                      width={index === 0 ? 550 : 280}
                      // @ts-ignore
                      height={index === 0 ? 370 : 220}
                      className="object-cover w-full h-full"
                    />
                  </DialogTrigger>
                  <DialogContent className="bg-transparent flex flex-col gap-2 items-center justify-center border-none w-[80vw] max-w-[80vw] min-h-[60vh]">
                    <DialogTitle>Gallery</DialogTitle>
                    <div className="w-full h-full flex items-center justify-center">
                      {selectedImage && (
                        <Image
                          src={selectedImage}
                          alt="main"
                          height={500}
                          width={600}
                          className="w-full object-contain h-auto max-h-[60vh]"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      {images.slice(0, -1).map((item, idx) => (
                        <button
                          onClick={() => setSelectedImage(item)}
                          className={`w-full h-full rounded-md relative ${
                            selectedImage === item
                              ? "border-2 border-main border-solid overflow-clip"
                              : ""
                          }`}
                          key={idx}
                        >
                          {selectedImage === item && (
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
                              <Eye />
                            </span>
                          )}
                          <Image
                            src={item}
                            alt="thumbnails"
                            width={250}
                            height={150}
                            className={`h-[120px] w-[200px] ${
                              selectedImage === item && "blur"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Image
                  alt={`grid-trips-${index + 1}`}
                  src={image}
                  width={index === 0 ? 550 : 280}
                  height={index === 0 ? 370 : 220}
                  className="object-cover w-full h-full"
                />
              )}
            </span>
          );
        })}
      </div>

      <div className="flex items-center justify-center sm:hidden relative">
        <Dialog>
          <DialogTrigger className="h-full w-full">
            <Image
              src={images[0]}
              alt="mobile-v"
              className="h-full w-full max-h-[300px] aspect-square object-cover"
              width={400}
              height={300}
            />
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none p-0">
            <DialogTitle></DialogTitle>
            <div className="flex flex-row items-center justify-center overflow-x-auto">
              {images.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  alt="trip image"
                  width={400}
                  height={350}
                  className="h-auto w-screen object-contain flex-shrink-0"
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <span className="size-[32px] rounded-full bg-white text-[#121212] absolute top-4 right-4 grid place-items-center">
          <Heart size={20} />
        </span>
        <span className="size-[32px] rounded-full bg-white text-[#121212] absolute top-4 right-14 grid place-items-center">
          <Share size={20} />
        </span>
        <span className="absolute bottom-4 right-4 text-[#121212] bg-white rounded-sm px-2 py-1 h-[32px] w-[64px] text-sm flex items-center gap-1">
          <ImageIcon size={18} className="flex-shrink-0" />
          <p className="flex items-center">1/{images.length}</p>
        </span>
      </div>

      <div className="flex flex-col gap-2 max-w-[1200px] mx-auto mt-6 px-3 sm:p-0">
        <span className="flex flex-row items-start justify-between">
          <h1 className="font-bold text-2xl sm:text-5xl text-[#121212]">
            {title}
          </h1>
          <span className="hidden sm:flex items-center gap-6">
            <button className="flex items-center gap-2 font-medium text-[#121212]">
              <Share size={20} />
              <p className="underline">Share</p>
            </button>
            <button className="flex items-center gap-2 font-medium text-[#121212]">
              <Heart size={20} />
              <p className="underline">Save</p>
            </button>
          </span>
        </span>
        <span className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <span className="flex items-center gap-1 text-[#121212]">
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <StarHalf size={16} />
            <span className="flex items-center gap-1 text-[#121212]">
              <p className="underline">2630 reviews</p>
              <p>in TripAdvisor</p>
            </span>
          </span>
          <span className="flex items-center gap-2 text-[#121212]">
            <ThumbsUp size={16} />
            Recommended by 99% of travelers
          </span>
        </span>
      </div>
    </div>
  );
};

export default TripHeading;
