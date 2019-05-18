// import fetch from 'isomorphic-fetch';
import '../static/styles/index.scss';

import Layout from '../components/Layout/Layout';
// import DownloadBtn from '../components/buttons/whiteBtn';
// import BlueBtn from '../components/buttons/blueBtn';
// import NextBtn from '../components/buttons/nextBtn';
// import PrevBtn from '../components/buttons/prevBtn';

export class index extends React.Component {
  render() {
    return (
      <Layout>
        <div className='blueContainer'>
          <section className='pageWrapper' />
        </div>
      </Layout>
    );
  }
}

export default index;
