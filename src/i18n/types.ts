export interface Member {
  name: string;
  role: string;
}

export interface Translations {
  nav: {
    about: string;
    kostprobe: string;
    barbershop: string;
    book: string;
  };
  about: {
    label: string;
    text: string;
    members: Member[];
  };
  kostprobe: {
    label: string;
    caption1: string;
    caption2: string;
    caption3: string;
  };
  barbershop: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  book: {
    label: string;
    text: string;
    contact: string;
    contactName: string;
    contactSuffix: string;
    emailSubject: string;
  };
  footer: {
    email: string;
  };
}

export type Lang = 'de' | 'en';
