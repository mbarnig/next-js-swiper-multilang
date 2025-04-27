'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function PostSwiper({ posts }) {
  return (
    <div className="relative h-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full"
      >
    {posts.map(post => (
      <SwiperSlide key={post.id} className="h-full w-full">
        <div className="p-4 h-full w-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
