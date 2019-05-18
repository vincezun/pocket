import Link from 'next/link';
import '../../static/styles/blueBtn.scss';

class blueBtn extends React.Component {
  render() {
    const { link, styled, name } = this.props;
    return (
      <Link href={link}>
        <a className='blueBtn' style={styled}>
          {name}
        </a>
      </Link>
    );
  }
}

export default blueBtn;
