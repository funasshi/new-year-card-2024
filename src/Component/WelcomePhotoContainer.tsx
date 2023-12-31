import { Container, Image } from 'react-bootstrap';

export const WelcomePhotoContainer = ({}: {}) => {
  return (
    <Container
      style={{
        zIndex: 0,
        display: 'grid',
        overflow: 'hidden',
      }}
      className='w-100 pt-4'
    >
      <div
        className='w-100'
        style={{ textAlign: 'center' }}
        // onAnimationEnd={onAnimationEnd}
      >
        <div
          style={{
            width: '230px',
            height: '230px',
            display: 'inline-block',
            borderRadius: '140px',
            animation: 'fadeIn 1s ease-in forwards',
          }}
        >
          <Image
            src={`${process.env.REACT_APP_ROOT_PATH}images/default.jpg`}
            className='w-100 h-100 d-flex align-items-center'
            // TODO: coverで比率は保つが、一瞬縮むので、元画像を正方形にする
            style={{ objectFit: 'fill' }}
          />
        </div>
      </div>
    </Container>
  );
};
