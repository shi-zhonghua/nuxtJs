<template>
    <div v-swiper:mySwiper="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <video id="video" height="260" style="width:100%" src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls="controls" playsinline="" webkit-playsinline="" poster="http://imsapi.yueqizhixiang.com/uploads/images/leqizhixiang/shangjiadianpu/zixun2/1564392065070.jpg">
                    您的浏览器不支持 video 标签。
                </video>
                <button @click="pause">暂停</button>
                <button @click="play">开始</button>
                <button @click="isPaused">状态</button>
            </div>
            <div class="swiper-slide" v-for="banner in 5">
                {{banner}}
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
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
            //  轮播的时候 视频暂停方法
            slideChangeTransitionEnd: function() {
	        let videos = document.querySelectorAll('video');
	        pauseMedia(videos);
	        // pauseMedia(myAudio, 'audio');
	        function pauseMedia (media) { // 翻页时媒体暂停播放
	          for (var i = 0; i < media.length; i++) {
	            media[i].pause();
	          }
	        }
	      },
        }
      }
    };
  },
  methods: {
    pause() {
      var video = document.getElementById("video");
      alert("点击暂停");
      //暂停
      video.pause();
    },
    play() {
      var video = document.getElementById("video");
      //播放
      video.play();
    },
    isPaused() {
      var video = document.getElementById("video");
      alert(video.paused);
    }
  },
  mounted() {
    // console.log("app init", this);
    // console.log(this.mySwiper);
    // console.log(this.mySwiper);
  }
};
</script>
<style lang="less" scoped>
.my-swiper {
  height: 300px;
  width: 300px;
  .swiper-slide {
    overflow: hidden;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>
