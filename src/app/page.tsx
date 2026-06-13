import '@splidejs/react-splide/css';

import Clientale from '@/components/index/Clientale';
import Introduction from '@/components/index/Introduction';
import Services from '@/components/index/Services';

const Index = () => {
  return (
    <>
      <Introduction />
      <Clientale />
      <Services />
    </>
  );
};

export default Index;
