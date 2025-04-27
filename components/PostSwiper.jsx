'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper'; // <-- Import correct ici !
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function PostSwiper({ posts }) {
  return (
    <div className="relative h-full">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full"
      >
        {posts.map(post => (
          <SwiperSlide key={post.id}>
            <div className="p-4 h-full overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">{post.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flèches custom */}
      <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 cursor-pointer z-10 hover:bg-gray-500">
        ◀
      </div>
      <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 cursor-pointer z-10 hover:bg-gray-500">
        ▶
      </div>
    </div>
  );
}
