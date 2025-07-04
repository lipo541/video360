import Services from '../../pages/services/services';

export const metadata = {
  title: "ჩვენი სერვისები - 360° Bullet-Time ვიდეო ეფექტები",
  description: "Video360 Studio-ს სერვისები: 360° Matrix Shot ვიდეო, Bullet-Time ეფექტები, პროფესიონალური ღონისძიებების გადაღება, მარკეტინგული ვიდეო კამპანიები და კორპორატიული ღონისძიებები.",
  keywords: [
    "360 ვიდეო სერვისები",
    "Matrix Shot ღონისძიება",
    "bullet time ვიდეო",
    "კორპორატიული ღონისძიებები",
    "მარკეტინგული ვიდეო",
    "პროფესიონალური ღონისძიება",
    "360 კამერა სერვისი"
  ],
  openGraph: {
    title: "ჩვენი სერვისები - Video360 Studio",
    description: "360° Matrix Shot ვიდეო, bullet-time ეფექტები და პროფესიონალური ღონისძიებების გადაღება",
    url: "https://video360studio.ge/services",
  },
};

export default function ServicesPage() {
  return <Services />;
}
