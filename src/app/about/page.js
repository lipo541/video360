import About from '../../pages/about/about';

export const metadata = {
  title: "ჩვენ შესახებ - Video360 Studio საქართველოში",
  description: "Video360 Studio არის საქართველოს პირველი და ერთადერთი 360° bullet-time ვიდეო სტუდია. ჩვენი ისტორია, გუნდი და მდებარეობა თბილისში.",
  keywords: [
    "Video360 Studio ისტორია",
    "360 ვიდეო სტუდია შესახებ",
    "ჩვენი გუნდი",
    "მდებარეობა თბილისი",
    "Matrix Shot სტუდია საქართველო"
  ],
  openGraph: {
    title: "ჩვენ შესახებ - Video360 Studio",
    description: "ისწავლეთ Video360 Studio-ს შესახებ - საქართველოს პირველი 360° bullet-time ვიდეო სტუდია",
    url: "https://video360studio.ge/about",
  },
};

export default function AboutPage() {
  return <About />;
}
