import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {


  return (
    <div>
      <h5><b>HELLO</b></h5>
      <TypeAnimation
    className='display-6'
        sequence={[
          'I am <Web Developer />',
          1000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{display: 'inline-block' }}
      />
      <div className='mt-3'>
        <button className="btn btn-dark h6 rounded-pill" type="button">HIRE ME</button>
      </div>
    </div>
  )
}

export default HeroSection