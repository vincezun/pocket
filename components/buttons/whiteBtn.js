import Link from 'next/link';
import '../../static/styles/whiteBtn.scss';

class whiteBtn extends React.Component {
  render() {
    return (
      <Link href={this.props.link}>
        <a className='whiteBtn' style={this.props.styled}>
          {this.props.name}
        </a>
      </Link>
    );
  }
}

export default whiteBtn;
