// src/types/i18n.d.ts
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: {
        header: {
          about: string;
          services: string;
          contact: string;
          contactButton: string;
        };
        hero: {
          heroTitle1: string;
          heroTitle2: string;
          heroTitle3: string;
          heroText: string;
          heroBtn: string;
          team: {
            karina: string;
            dmytro: string;
            alex: string;
          };
          features: {
            rating: {
              rating: string;
              text: string;
            };
            pages: string;
            clients: string;
          };
        };
        aboutUs: {
          title: string;
          textOne: string;
          textTwo: string;
        };
        formReply: {
          reply: string;
          title: string;
          velcome: string;
          signatureOne: string;
          signatureTwo: string;
        };
        oferSection: {
          title: string;
          text: string;
        };
        ofers: {
          landingPage: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
          site: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
          selfWebSite: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
           portfolio: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
          store: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
        };
        ASsection: {
          title: string;
        };
        additionalServises: {
          Optimisation: { svg: string; serviceName: string; info: string };
          Redesign: { svg: string; serviceName: string; info: string };
          Copywriting: { svg: string; serviceName: string; info: string };
          Content: { svg: string; serviceName: string; info: string };
          SEO: { svg: string; serviceName: string; info: string };
          Support: { svg: string; serviceName: string; info: string };
        };
        Portfolio: { portfolio: string };
        Benefits: {
          title: string;
          benefitsList: {
            expiriance: { title: string; text: string };
            efects: { title: string; text: string };
            approach: { title: string; text: string };
            support: { title: string; text: string };
          };
        };
        ContactSection: {
          title: string;
          text: string;
        };
        footer: {
          title1: string;
          title2: string;
          title3: string;
          ownerInfo: string;
          privatePolice: string;
          link: string;
        };
        privatePolicy: {
          text: string;
        };
      };
      formTranslation: {
        formTitle: string;
        formPlaseholders: {
          name: string;
          company: string;
          telefon: string;
          email: string;
          text: string;
          agree: string;
          shortAgree:string;
        };
        errors: {
          error: string;
          min: string;
          max: string;
          maxText: string;
          mail: string;
          onlyLetters: string;
          phone: string;
        };
        button: {
          send: string;
          sending: string;
        };
      };
    };
  }
}
