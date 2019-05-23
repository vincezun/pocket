import Link from 'next/link';
import '../../static/styles/whiteBtn.scss';

class downloadBtn extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <Link href={link}>
        <a className='whiteBtn'>DOWNLOAD</a>
      </Link>
    );
  }
}

export default downloadBtn;
