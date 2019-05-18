import '../../static/styles/nextBtn.scss';

class nextButton extends React.Component {
  render() {
    return (
      <div className='nextBtn' style={this.props.styled}>
        <img src='/static/images/right-arrow.svg' alt='Right arrow' />
      </div>
    );
  }
}

export default nextButton;
