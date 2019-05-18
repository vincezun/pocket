import Link from 'next/link';
import '../../static/styles/whiteBtn.scss';

class whiteBtn extends React.Component {
  render() {
    const { link, styled, name } = this.props;
    return (
      <Link href={link}>
        <a className='whiteBtn' style={styled}>
          {name}
        </a>
      </Link>
    );
  }
}

export default whiteBtn;
