/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/react-splide/css';

import Clientale from '@/components/index/Clientale';
import Introduction from '@/components/index/Introduction';
import Services from '@/components/index/Services';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Milind Sonawane | Full Stack Developer"
          description="Milind Sonawane is a Full Stack Developer from India. He is a passionate developer who loves to code and learn new technologies."
        />
      }
    >
      <Introduction />
      <Clientale />
      <Services />
    </Main>
  );
};

export default Index;
