import Main from '../components/mainsection/mainsection.component';
import SliderInfo from '../components/slider.one/slider.info.component';
import Catalog from '../components/catalog/catalog.component';
import TradeIn from '../components/tradein/tradein.component';
import AboutJob from '../components/aboutJob/about.job.component';
import CallBack from '../components/callback/callback.component';
import ModalInfo from '../components/modal/modal.component';

export default function Home() {
  return (
    <>
      <Main />
      <SliderInfo />
      {/* <FetchComponent /> */}
      <Catalog />
      <TradeIn />
      <AboutJob />
      <CallBack />
      <ModalInfo />
    </>
  );
}
