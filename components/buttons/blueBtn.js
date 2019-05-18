import Link from 'next/link';
import '../../static/styles/blueBtn.scss';

class blueBtn extends React.Component {
  render() {
    return (
      <Link href={this.props.link}>
        <a className='blueBtn' style={this.props.styled}>
          {this.props.name}
        </a>
      </Link>
    );
  }
}

export default blueBtn;
