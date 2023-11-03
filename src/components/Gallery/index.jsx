import Subtitle from "../subtitle";

const Gallery = () => {
  return (
    <>
      <div>
        <Subtitle subtitle={"Gallery"} />
        <p className="font-semibold my-5">Visit our customers tour gallery</p>
        <div className="flex gap-2">
          <div class="container pb-4 h-auto  mx-auto">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-1.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-2.jpg"
                  />
                </div>
                <div class="w-full flex justify-evenly p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-4.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-3.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-5.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-6.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container pb-4 h-auto  mx-auto">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-7.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-8.jpg"
                  />
                </div>
                <div class="w-full flex justify-evenly p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-9.jpg"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-3.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-5.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="/media/gallery-6.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
