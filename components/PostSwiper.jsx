"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function PostSwiper({ posts }) {
  const swiperRef = useRef();

  return (
    <div className="h-full w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => {
          // Scroll automatique vers le haut
          const activeSlide = document.querySelector('.swiper-slide-active');
          if (activeSlide) {
            activeSlide.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="h-full"
      >
        {posts.map(post => (
          <SwiperSlide key={post.id} className="h-full w-full overflow-y-auto">
            <div className="p-4 h-full w-full content">
              <h2 className="text-2xl font-bold mb-4">{post.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
