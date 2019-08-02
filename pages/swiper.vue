<template>
    <div v-swiper:mySwiper="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <video id="video" height="260" style="width:100%" src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls="controls" playsinline="" webkit-playsinline="" poster="http://imsapi.yueqizhixiang.com/uploads/images/leqizhixiang/shangjiadianpu/zixun2/1564392065070.jpg">
                    您的浏览器不支持 video 标签。
                </video>
            </div>
            <div class="swiper-slide" v-for="banner in 5">
                {{banner}}
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        // autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination"
          //   dynamicBullets: true // 隐蔽部分分页小点
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  mounted() {
    console.log("app init", this);
    console.log(this.mySwiper);
    // this.mySwiper.slideTo(3);
  }
};
</script>
<style lang="less" scoped>
.my-swiper {
  height: 300px;
  width: 300px;
  .swiper-slide {
    // text-align: center;
    // font-size: 38px;
    // font-weight: 700;
    // background-color: #eee;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // color: #000;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>
