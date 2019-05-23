import Link from 'next/link';
import '../../static/styles/viewMoreBtn.scss';

class viewMoreBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='viewMoreBtn'>VIEW MORE</a>
      </Link>
    );
  }
}

export default viewMoreBtn;
