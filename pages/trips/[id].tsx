// "use client";
// import { notFound, useParams } from "next/navigation";

// import TripData from "@/src/components/Trips/TripData";
// // import Header from "@/app/home/components/Header/Header";
// import HeaderImage from "@/src/components/Trips/HeaderImage";
// import IconWithDetails from "@/src/components/Trips/IconWithDetails";
// import Tripdetails from "@/src/components/Trips/TripDetails";
// import Notes from "@/src/components/Trips/Notes";
// import PhotosOfTrip from "@/src/components/Trips/PhotosOfTrip";
// import Footer from "@/src/components/Footer";
// // import Footer from "@/src/components/Trips/Footer";
// // import RelatedTrips from "@/src/components/Trips/RelatedTrips";
// import HeaderImageContent from "@/src/components/Trips/HeaderImageContent";
// import Link from "next/link";

// const TripPage = () => {
//   const { id } = useParams();
//   const specificTrip = TripData.find((tr) => tr.TripId === id);
//   if (!specificTrip) {
//     return notFound();
//   }

//   return (
//     <>
//       {/* <Header /> */}
//       <div className="bg-white">
//         <HeaderImage TripMainImage={specificTrip.TripMainImage} />
//         <HeaderImageContent TitleOnImage={specificTrip.TripTittle} />
//         <div className="flex">
//           <div className="w-3/5 px-4">
//             <IconWithDetails
//               duration={specificTrip.TripDuration}
//               pickUpAndDrop={specificTrip.TripPickAndDrop}
//               dates={specificTrip.Dates}
//             />
//             <Tripdetails
//               description={specificTrip.TripDescription}
//               // itineary={specificTrip.Itineary}
//               dates={specificTrip.Dates}
//               inclusion={specificTrip.Inclusion}
//               exclusion={specificTrip.Exclusion}
//             />
//             <Notes />
//             {/* <RelatedTrips /> */}
//           </div>
//           <div
//             className=" mt-5 mx-10 shadow-2xl
// border-gray-800 h-auto w-2/5"
//           >
//             <div className="bg-white border-2 top-1/4">
//               <h2 className="text-center text-2xl py-4">Reach Out to Us</h2>
//               <div className="p-4 w-3/4 items-center">
//                 <form>
//                   <input
//                     type="text"
//                     id="full_name"
//                     className="bg-white border my-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Name....."
//                     required
//                   />
//                   <input
//                     type="text"
//                     id="mobile_number"
//                     className="bg-white border my-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Mobile Number......"
//                     required
//                   />
//                   <input
//                     type="text"
//                     id="email_id"
//                     className="bg-white border my-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Email Id........."
//                     required
//                   />
//                   <input
//                     type="text"
//                     id="destination"
//                     className="bg-white border  my-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Destination"
//                     required
//                   />
//                   <button
//                     className="bg-red-200 p-4 w-full rounded-2xl"
//                     type="submit"
//                   >
//                     Request A Quote
//                   </button>
//                 </form>
//                 <div className="w-full p-4 rounded-2xl bg-[#02A698] text-white my-4">
//                   <Link
//                     href="https://wa.me/7011632946?text=I'm%20interested%20in%20your%20Free%20Trip"
//                     target="_blank"
//                   >
//                     Whatsapp
//                   </Link>
//                 </div>
//                 <div className="w-full p-4 rounded-2xl bg-[#ED8D2B] text-white my-4">
//                   <Link href="tel:7011632946" target="_blank">
//                     Call Now
//                   </Link>
//                 </div>
//               </div>
//               <div className="border-2 border-lime-400 h-fit mx-10">
//                 <div className="h-10 bg-red-300">
//                   <p className="text-white text-2xl text-center">
//                     {" "}
//                     Why Journey Capturer
//                   </p>
//                 </div>
//                 <div className="px-5">
//                   <ul>
//                     <li>
//                       • Community of Travellers <br />
//                       Community of more than 2,64,000+ happy travellers on
//                       Instagram
//                     </li>
//                     <li>
//                       • Women Travellers Centric Facilities <br /> All-girl
//                       trips, all-female room sharing, providing female
//                       coordinator and so much more
//                     </li>
//                     <li>
//                       • Exploring Offbeat Places
//                       <br /> Along with mainstream locations, exploring 100+
//                       not-so-popular travel spots
//                     </li>
//                     <li>
//                       • Young Blood <br />A company led by young people that has
//                       created an open and safe space for young travellers
//                     </li>
//                     <li>
//                       • Customized Itineraries
//                       <br /> Experienced travel experts to create the best
//                       itineraries for your needs
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//       {/* <PhotosOfTrip tripRelatedPhotos={specificTrip.tripPhotos} /> */}
//     </>
//   );
// };

// export default TripPage;
