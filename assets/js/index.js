const datas = [
  {
    id: 1,
    date: "1402/12/1",
    reqDesc: "شناسه درخواست #121212",
    imgUrl: "/assets/imgs/1.jpg",
    name: "علی مجیدی",
  },
  {
    id: 2,
    date: "1402/11/1",
    reqDesc: "شناسه درخواست #15382",
    imgUrl: "/assets/imgs/2.jpg",
    name: "زهرا ابراهیمی",
  },
  {
    id: 3,
    date: "1402/2/13",
    reqDesc: "شناسه درخواست #269642",
    imgUrl: "/assets/imgs/3.jpg",
    name: "علیرضا آذر",
  },
  {
    id: 4,
    date: "1402/6/8",
    reqDesc: "شناسه درخواست #978872",
    imgUrl: "/assets/imgs/4.jpg",
    name: "محمد اعتصامی",
  },
  {
    id: 5,
    date: "1402/9/9",
    reqDesc: "شناسه درخواست #112972",
    imgUrl: "/assets/imgs/5.jpg",
    name: "نورا فتاحی",
  },
  {
    id: 6,
    date: "1402/5/23",
    reqDesc: "شناسه درخواست #18792",
    imgUrl: "/assets/imgs/6.jpg",
    name: "عباس مروندی",
  },
];

const mainSection = document.querySelector(".main-section");

datas.map((req) => {
  const profile = createElem("div");
  profile.classList.add("profile");

  const reqCard = createElem("div");
  reqCard.classList.add("request-card");

  const reqData = createElem("header");
  reqData.classList.add("request-data");

  const data = createElem("div");
  data.classList.add("data");

  const badgeCounter = createElem("span");
  badgeCounter.classList.add("badge");
  badgeCounter.classList.add("badge--counter");
  badgeCounter.textContent = req.id;

  const p = createElem("p");
  p.textContent = "آپلود مستندات";

  const reqDate = createElem("div");
  reqDate.classList.add("request__date");
  reqDate.textContent = req.date;

  const reqTitle = createElem("div");
  reqTitle.classList.add("request-title");

  const title = createElem("h3");
  title.classList.add("__title");
  title.textContent = "درخواست عضویت";

  const reqId = createElem("p");
  reqId.classList.add("__id");
  reqId.textContent = req.reqDesc;

  const footer = createElem("footer");
  footer.classList.add("request-view");

  const proHolder = createElem("div");
  proHolder.classList.add("profile-holder");

  const proImg = createElem("img");
  proImg.classList.add("profile__image");
  proImg.src = req.imgUrl;

  const name = createElem("p");
  name.classList.add("profile__name");
  name.textContent = req.name;

  const btn = createElem("button");
  btn.classList.add("btn");
  btn.classList.add("btn--primary");
  btn.textContent = "مشاهده درخواست";

  proHolder.append(proImg);
  proHolder.append(name);
  footer.append(proHolder);
  footer.append(btn);
  reqTitle.append(title);
  reqTitle.append(reqId);
  data.append(badgeCounter);
  data.append(p);
  reqData.append(data);
  reqData.append(reqDate);
  reqCard.append(reqData);
  reqCard.append(reqTitle);
  reqCard.append(footer);
  profile.append(reqCard);
  mainSection.append(profile);
});
console.log(mainSection);

function createElem(elemType) {
  const element = document.createElement(elemType);
  return element;
}
