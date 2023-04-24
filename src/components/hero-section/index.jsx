import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

import "./hero.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // useEffect(() => {
  //   console.log(navigationPrevRef)
  //   // Swiper navigasyon referanslarını yeniden ata
  //   const swiper = document.querySelector(".mySwiper");
  //   if (swiper && navigationPrevRef.current && navigationNextRef.current) {
  //   }
  //   console.log(navigationPrevRef);
  // }, []);

  return (
    <>
      <div className="block lg:hidden">
        <div className="relativ">
          <img
            className="h-screen object-cover"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-1.jpg?v=1679891172&width=1500"
            alt=""
          />
        </div>
        <div className="absolute top-80 left-6 flex flex-col">
          <h3 className="text-4xl mb-4">
            Online <br />
            Limited Edition
          </h3>
          <span className="font-sans font-light">
            So soft,you don't want to take it off.
          </span>

          <button className="bg-black text-white mt-3 w-1/2 h-14 rounded-full uppercase font-sans">
            Shop now
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Swiper
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          effect="fade"
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
            hashNavigation: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.update();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="relative"
              src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-1.jpg?v=1679891172&width=1500"
              alt=""
            />
            <div className="img-text">
              <h3>
                Stylish <br />
                Top Trending
              </h3>
              <span>So soft,you don't want to take it off.</span>

              <button>
                <Link>Explore Now</Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-2.jpg?v=1679891172&width=1500"
              alt=""
            />

            <div className="img-text">
              <h3>
                Hulton <br />
                Perfect Simple
              </h3>
              <span>So soft,you don't want to take it off.</span>

              <button>
                <Link>Shop now</Link>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/h1-slide-show-3.jpg?v=1679891172&width=1500"
              alt=""
            />

            <div className="img-text">
              <h3>
                Online <br />
                Limited Edition
              </h3>
              <span>So soft,you don't want to take it off.</span>

              <button>
                <Link>Shop now</Link>
              </button>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>

        <div className="flex items-center mb-8 absolute w-full top-1/2 z-[1]">
          <div className="flex w-full !justify-between items-center gap-2">
            <div
              ref={navigationPrevRef}
              className="group w-10 h-10 border-2 cursor-pointer rounded-full transition-all flex items-center justify-center border-black hover:bg-title hover:border-white"
            >
              <FaChevronLeft className="transition-all  group-hover:text-white" />
            </div>
            <div
              ref={navigationNextRef}
              className="group w-10 h-10 border-2 cursor-pointer rounded-full transition-all flex items-center justify-center border-black hover:bg-title hover:border-white"
            >
              <FaChevronRight className="transition-all  group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
