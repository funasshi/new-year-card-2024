import { WelcomePhotoContainer, BounceFadeinSentence } from '../Component';
import { Image, Container, Row, Col } from 'react-bootstrap';

export const WelcomePage = () => {
  return (
    <div
      className='w-100'
      style={{
        backgroundImage: `url(${process.env.REACT_APP_ROOT_PATH}images/welcomeBackgroundImage.jpg)`,
        backgroundSize: '100% 100%',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundBlendMode: 'lighten',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '70px',
          display: 'inline-block',
          borderRadius: '140px',
          textAlign: 'center',
          marginTop: '20%',
          animation: 'fadeIn 1s ease-in forwards',
        }}
      >
        <Image
          src={`${process.env.REACT_APP_ROOT_PATH}images/happy-new-year.png`}
          className='w-100 h-100 d-flex align-items-center'
          // TODO: coverで比率は保つが、一瞬縮むので、元画像を正方形にする
          style={{
            objectFit: 'contain',
            width: '250px',
          }}
        />
      </div>
      <WelcomePhotoContainer />
      <div
        className='px-5 mt-3'
        style={{
          fontFamily: 'serif',
          fontSize: '15px',
          textAlign: 'center',
          fontWeight: 600,
          color: '#4E372C',
        }}
      >
        <p>
          <BounceFadeinSentence sentence={'昨年は大変お世話になりました。'} />
          <br />
          <BounceFadeinSentence
            sentence={'本年もよろしくお願いいたします。'}
            baseTime={15}
          />
        </p>
        <Container>
          <Row>
            {/*  */}
            <Col xs={{ span: 6, offset: 6 }}>
              <BounceFadeinSentence sentence={'令和六年 元旦'} baseTime={31} />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          width: '100%',
          height: '100px',
          display: 'inline-block',
        }}
      >
        <Image
          src={`${process.env.REACT_APP_ROOT_PATH}images/mtFuji.png`}
          className='w-50 h-100 d-flex align-items-left'
          // TODO: coverで比率は保つが、一瞬縮むので、元画像を正方形にする
          style={{ objectFit: 'contain', width: '300px' }}
        />
      </div>
    </div>
  );
};
