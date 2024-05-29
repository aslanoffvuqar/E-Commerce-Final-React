import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      contact: "Contact",
      About: "About",
      Exclusive: "Exclusive",
      "Woman’s Fashion": "Woman’s Fashion",
    },
  },
  az: {
    translation: {
      home: "Ev",
      contact: "Əlaqə",
      "Sign Up": "Abunə olun",
      Exclusive: "Eksklüziv",
      "Woman’s Fashion": "Qadın Moda",
      "Men’s Fashion": "Kişi Moda",
      Electronics: "Elektronika",
      "Home & Lifestyle": "Ev və Həyat tərzi",
      Medicine: "Dərman",
      "Sports & Outdoor":"İdman və Çöl",
      "Baby’s & Toys":"Uşaq & Oyuncaqlar",
      "Groceries & Pets":"Ərzaq və Ev Heyvanları",
      "Health & Beauty":"Sağlamlıq və Gözəllik"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
