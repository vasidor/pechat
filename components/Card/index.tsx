import { Button, Card, CardBody, Link, Skeleton } from "@nextui-org/react";
import { ImageUrl } from "@prisma/client";
import FormatPrice from "@/utils/FormatPrice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

const CardItem = ({
  handle,
  title,
  description,
  rating,
  price,
  images,
  isLoading,
}: {
  handle: string;
  title: string;
  description?: string | null;
  rating?: number;
  price: number;
  images: ImageUrl[];
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return (
      <Card
        radius="sm"
        shadow="sm"
        className="relative flex w-full max-w-sm flex-none"
      >
        <CardBody className="relative flex flex-col gap-3">
          <Skeleton className="rounded-md">
            <div className="relative w-full aspect-square"></div>
          </Skeleton>
          <div className="mt-1 flex flex-col gap-2 px-1">
            <div className="flex items-start justify-between gap-1">
              <Skeleton className="rounded-md">
                <h3 className="text-small font-medium text-default-700">
                  {title}
                </h3>
              </Skeleton>
            </div>
            <div className="flex items-start justify-between gap-1">
              <Skeleton className="rounded-md">
                <p className="text-base font-medium text-default-500">
                  {price}
                </p>
              </Skeleton>
              <Skeleton className="rounded-md">Узнать больше</Skeleton>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
  return (
    <Card
      radius="sm"
      shadow="sm"
      className="relative flex w-full max-w-sm flex-none"
    >
      <CardBody className="relative flex flex-col gap-3">
        <div className="relative w-full aspect-square">
          <SliderImagesCard images={images} />
        </div>
        <div className="mt-1 flex flex-col gap-2 px-1">
          <div className="flex gap-1">
            <h3 className="text-lg font-medium text-default-700">{title}</h3>
          </div>
          <p className="text-small text-default-500 line-clamp-2">
            {description}
          </p>
          <div className="flex items-start justify-between gap-1">
            
            <Button
              color="secondary"
              variant="solid"
              size="sm"
              href={`products/${handle}`}
              as={Link}
              showAnchorIcon
              className="w-full"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const SliderImagesCard = ({ images }: { images: ImageUrl[] }) => {
  return (
    <>
      <Swiper
        className="w-full h-full !overflow-visible"
        scrollbar={{ draggable: true, el: ".swiper-scrollbar", hide: false }}
        modules={[Scrollbar, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        loop={images && images.length > 1}
      >
        {images && images.length > 0 ? (
          images.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="relative shadow-black/5 shadow-none rounded-large max-w-fit">
                <div className="relative overflow-hidden rounded-inherit rounded-large">
                  <img
                    src={data.url}
                    className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square w-full hover:scale-110"
                    alt="Продукт"
                    data-loaded="true"
                  />
                </div>
                <img
                  src={data.url}
                  className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large"
                  alt="Продукт"
                  aria-hidden="true"
                  data-loaded="true"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <div className="flex justify-center items-center h-full">
                <span className="text-sm">Изображение отсутствует</span>
              </div>
            </SwiperSlide>
          </>
        )}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </>
  );
};

export default CardItem;
