const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Donation",
          desc:
            "후원 대상자: Bobㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ해당 사진에 아래에 있는 'DOWNLOAD'을 클릭하여 마이닝 캠페인에 참여하십시오.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ※프로그램 실행 후 컴퓨터를 껐다가 키시면 마이닝 속도가 더욱 더 빨라집니다.",
          photo:
            "https://cdn.seogwipo.co.kr/news/photo/201803/146946_111751_4945.jpg"
        },
        {
          id: 2,
          title: "Donation",
          desc:
            "후원 대상자: Aliceㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ해당 사진에 아래에 있는 'DOWNLOAD'을 클릭하여 마이닝 캠페인에 참여하십시오.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ※프로그램 실행 후 컴퓨터를 껐다가 키시면 마이닝 속도가 더욱 더 빨라집니다.",
          photo:
            "http://cdn.catholicnews.co.kr/news/photo/201811/20675_41839_491.jpg"
        },
        {
          id: 3,
          title: "Donation",
          desc:
            "후원 대상자: Eveㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ해당 사진에 아래에 있는 'DOWNLOAD'을 클릭하여 마이닝 캠페인에 참여하십시오.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ※프로그램 실행 후 컴퓨터를 껐다가 키시면 마이닝 속도가 더욱 더 빨라집니다.",
          photo:
            "https://img.freepik.com/premium-vector/unhappy-homeless-grey-haired-man-with-hat-beg-for-money-on-street-upset-lonely-poor-beggar-ask-for-help-and-aid-from-people-poverty-and-charity-concept-flat-vector-illustration_198530-2086.jpg?w=1380"
        },
        {
          id: 4,
          title: "Donation",
          desc:
            "후원 대상자: Malloryㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ해당 사진에 아래에 있는 'DOWNLOAD'을 클릭하여 마이닝 캠페인에 참여하십시오.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ※프로그램 실행 후 컴퓨터를 껐다가 키시면 마이닝 속도가 더욱 더 빨라집니다.",
          photo:
            "https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201712/02/3f0457af-97ea-49d7-8fb7-d3230210a923.jpg"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");
