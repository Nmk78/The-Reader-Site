import React, { useEffect } from "react";

import avatar from "../Assets/ProfilePhoto/avatar.png";
import WAvatar from "../Assets/ProfilePhoto/WAvatar.png";
import CTY from "../Assets/ProfilePhoto/CTY.jpg";
import EPZ from "../Assets/ProfilePhoto/EPZ.jpg";
import KKK from "../Assets/ProfilePhoto/KKK.jpg";
import TPN from "../Assets/ProfilePhoto/TPN.jpg";
import YML from "../Assets/ProfilePhoto/YML.jpg";
import ZMT from "../Assets/ProfilePhoto/ZMT.jpg";
import NMK from "../Assets/ProfilePhoto/NMK.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Participants() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <>
      <p
        data-aos="zoom-out-up"
        className="text-xxxl text-bold m-5 mx-auto mt-16"
      >
        Main Members
      </p>

      <div class="grid mx-10 mb-2 border border-gray-300 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2">
        <figure
          data-aos="fade-right"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-lg md:rounded-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              The Reader Club နဲ့ပတ်သက်ပြီးဘာပြောချင်လဲ? အရမ်းသဘောကျပါတယ်ရှင့်
            </h3>
            <p class="my-4 font-light">
              "စာအုပ်အကြောင်းအပြင်ဗဟုသုတရစရာတွေကော
              အရမ်းကောင်းတဲ့အကိုအမတွေညီမလေးတွေနဲ့တွေ့ရလို့
              ပိုကောင်းတဲ့ပတ်ဝန်းကျင်ကိုရလာလို့" "
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={KKK} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"K Khing Kyaw"</div>
            </div>
          </figcaption>
        </figure>

        {/* //this is sample format */}

        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "အခုလို ဒီclubလေး
              ရှိနေတဲ့အတွက်စာအကြောင်းပေအကြောင်းတွေလဲနားထောင်ခွင့်ရသလို
              ဗဟုသုတတွေလဲရပါတယ် အခုလိုလုပ်ပေးတဲ့ အစ်ကိုဝေယံသိန်းကျေးဇူးပါနော်
            </h3>
            <p class="my-4 font-light">"စာအုပ်အကြောင်းတွေနားထောင်ခွင့်ရလို့"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={TPN} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"Thiri Phyo Naing"</div>
            </div>
          </figcaption>
        </figure>
        <figure
          data-aos="fade-right"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "The Reader Club နဲ့ပတ်သက်ပြီးဘာပြောချင်လဲ? ဘာမှ မပြောချင်ဘူး"
            </h3>
            <p class="my-4 font-light">"ကြိုက်လို့"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={CTY} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"Cyinthia"</div>
            </div>
          </figcaption>
        </figure>
        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "သိပ်ကောင်းတဲ့ club ပါ။"
            </h3>
            <p class="my-4 font-light">
              "Bookworms တွေနဲ့စာအုပ်အကြောက်းဆွေးနွေးချင်လို့"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={EPZ} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"Ei Phyu Zin"</div>
            </div>
          </figcaption>
        </figure>

        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "The Reader Club နဲ့ပတ်သက်ပြီးဘာပြောချင်လဲ? အရမ်းကောင်းတယ်
              Yes...."
            </h3>
            <p class="my-4 font-light">
              "Gp Join ရင် ပြောရမယ်ဆိုတဲ့အသိကြောင့် စာအုပ်တွေပိုဖတ်ဖြစ်လို့"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src={avatar}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"Hippo"</div>
            </div>
          </figcaption>
        </figure>

        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "The Reader Club နဲ့ပတ်သက်ပြီးဘာပြောချင်လဲ? အခုထက် အချိန်စောစောလေး
              စဖြစ်စေချင်တာ",
            </h3>
            <p class="my-4 font-light">
              "စာအုပ်အကြောင်းအရာလေးတွေကို စာဖတ်သူရဲ့ review နဲ့အတူတူသိရတဲ့အတွက်
              ဖတ်စရာစာအုပ်လေးတွေပိုတိုးလာလို့ပါ
              ပြီးတော့စကားပြောစွမ်းရည်လေးတွေနားထောင်ရတာကြိုက်တယ်။ဝိုင်းဝန်းဆွေးနွေးမေးမြန်းကြတာရယ်
              အဖြေတွေရယ်က စိတ်ဝင်စားစရာမို့ပါ။"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={ZMT} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"ဇင်မင်းထွန်း"</div>
            </div>
          </figcaption>
        </figure>

        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "The Reader Clubလုပ်ပေးတာ ကျေးဇူးကမ္ဘာပါလို့..."
            </h3>
            <p class="my-4 font-light">
              "ဘာလို့ Join ဖြစ်တာလဲ? မ Join ဘဲ မနေနိုင်လို့"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src={avatar}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"Khant Sithu"</div>
            </div>
          </figcaption>
        </figure>

        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "စာအုပ်တွေအကြောင်းပြောချင်လို့Join ဖြစ်တာ"
            </h3>
            <p class="my-4 font-light">
              "ဘာလို့ Join ဖြစ်တာလဲ?စာအုပ်တွေအကြောင်းများများနားထောင်ရတော့
              စာဖတ်ဖို့ မပျင်းဘဲ ရင်းနှီးလာလို့ပါရှင်"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={YML} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"ယမင်းလှိုင်"</div>
            </div>
          </figcaption>
        </figure>

        <figure
          data-aos="fade-left"
          class="m-5 flex flex-col items-center justify-center p-8 text-center bg-white hover:bg-gray-50 hover:border-gray-100 hover:shadow-md border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8">
            <h3 class="text-lg font-semibold text-black">
              "စာပိုဖတ်ချင်ဖို့တွန်းအားရတဲ့နေရာ"
            </h3>
            <p class="my-4 font-light">"အမြင်သစ်တွေရလို့"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={NMK} alt="profile picture" />
            <div class="space-y-0.5 font-mediumtext-black text-left">
              <div>"Nay Myo Khant"</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
