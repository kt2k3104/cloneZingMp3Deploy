import { Box, Button, HStack, Img } from '@chakra-ui/react';
import styles from './Chudevatheloai.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ChuDeVaTheLoai() {
  return (
    <div className={cx('wrapper')}>
      <Box sx={css.box1}>
        <Img
          sx={css.img1}
          src="https://photo-zmp3.zmdcdn.me/cover/3/f/4/1/3f41f32d1ca9baeb2206137e5f2eab5c.jpg"
          alt="img"
        />
      </Box>
      <Box sx={css.box2}>
        <h3 className={cx('title')}>Nổi Bật</h3>
        <HStack gap={'28px'}>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/d/b/e/4/dbe426a555b7d680be25232007739019.jpg"
              alt="img"
            />
            <Box sx={css.box4}>BXH Nhạc Mới</Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/2/d/2/d/2d2d88326a507319335ffc2e2887c0b7.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Top 100</Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/a/c/9/e/ac9e073bbfbaadea7b1cb50bd047ece0.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Artist's Story</Box>
          </Box>
          <Box role="group" sx={css.box3} display={{ base: 'none', xxl: 'block' }}>
            <Img
              sx={css.img2}
              src="	https://photo-zmp3.zmdcdn.me/cover/5/d/9/b/5d9b3a5de0e11982a0207c92b7ac4c5a.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Chill/Thư Giãn</Box>
          </Box>
        </HStack>
      </Box>
      <Box sx={css.box2}>
        <h3 className={cx('title')}>Quốc Gia</h3>
        <HStack gap={'28px'}>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/9/5/8/e/958e9994c6720513cc84a7f7a478020b.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Nhạc Việt</Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="	https://photo-zmp3.zmdcdn.me/cover/d/6/4/0/d640e486023bb0bc1bbe4d94209ff648.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Nhạc Âu Mỹ</Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/9/0/c/6/90c615657364a570232d7f6e86ffa6da.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Nhạc Hàn</Box>
          </Box>
          <Box role="group" sx={css.box3} display={{ base: 'none', xxl: 'block' }}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/0/6/e/0/06e09e84d6c6ef29f588e0c6032d72bf.jpg"
              alt="img"
            />
            <Box sx={css.box4}>Nhạc Hoa</Box>
          </Box>
        </HStack>
      </Box>
      <Box sx={css.box2}>
        <h3 className={cx('title')}>Tâm Trạng Và Hoạt Động</h3>
        <Box
          display={'grid'}
          gridTemplateColumns={{ base: '31% 31% 31%', xxl: '23.2% 23.2% 23.2% 23.2%' }}
          gap={'28px'}
        >
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/3/b/c/0/3bc090f304669e0a01bc5cccdbc0715a.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>TẬP TRUNG</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/2/1/f/f21f484b734a87ac7ea7cb26778c8fe7.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/7/4/5/a745d23073791f45d120a8db418ac4ed.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/5/4/7/f547039d777138c2624fdc18b0a2823a.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/4/a/3/b/4a3b5265ee2c9e2c84f5a88194382b5d.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>NGỦ NGON</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/2/1/7/2217a09c02428d677e29fe63838beabc.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/b/6/1/8b610ea9b1ec967085945f7ecefc4113.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/9/c/c/19ccdfed9387bbf331a743775e04b7c9.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/b/b/b/0/bbb0a8963e9ed3b81974613b52b9476c.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>CÀ PHÊ</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/9/c/c/19ccdfed9387bbf331a743775e04b7c9.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/9/a/2/f9a2aa0e114eb9c3b7aa71f970797d1b.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/6/2/1/c621b2dee0d737b233b6b805ed944552.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3} display={{ base: 'none', xxl: 'block' }}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/b/7/7/5/b775816ff23ba94ed879a6282162f011.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>TÌNH YÊU</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/b/8/cdb827772e5a3696f1b8a99f69d43919.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/e/e/0/0ee0fee7ea1db71ce245e65e3f25c503.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/a/f/9/caf97d4c039272a76739f4ba43b25ecc.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="	https://photo-zmp3.zmdcdn.me/cover/7/a/0/0/7a00dbc39931345b369fdf61889302f6.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>LOFI</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/3/0/9/8309cbe078ac096917f0a0e61bfdbfd7.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/3/d/8/e3d8e5b02fbb8c04ae2f4e8e96a3f2a1.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>CHƠI GAME</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/7/c/7/97c7e9f277edf5cdb3269426c5b00ad2.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/b/7/6/7b766c4c4debc2ea417c48e0f0416a55.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/f/c/53fc6310a587d0a99e509a1d1fa4f2ef.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3}>
            <Img
              sx={css.img2}
              src="https://photo-zmp3.zmdcdn.me/cover/d/0/d/7/d0d772a6c3e35b3e768d5c3ebf644ecd.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>SPA-YOGA</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/5/5/4/f5544d2947e814adeb5bcf43cc767b68.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/b/4/f/bb4fb4067c8fcc9a27637cf20b72830d.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/1/8/1/e1816afeb2430de9cb47a4076d6a5f87.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
          <Box role="group" sx={css.box3} display={{ base: 'none', xxl: 'block' }}>
            <Img
              sx={css.img2}
              src="	https://photo-zmp3.zmdcdn.me/cover/0/9/0/9/09090b19d3417d364547db3027d141d5.jpg"
              alt="img"
            />
            <Box sx={css.box5}>
              <Box sx={css.box6}>KHÚC NHẠC VUI</Box>
              <HStack gap={'5px'}>
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/d/0/2/dd021881c01665cd1e82f9b85ce7aff6.jpg"
                  alt="img"
                />
                <Img
                  sx={css.img3}
                  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/4/9/6f4915e782411dcae094df0c7c4e490b.jpg"
                  alt="img"
                />
              </HStack>
            </Box>
          </Box>
        </Box>
        <Button sx={css.button}>TẤT CẢ</Button>
      </Box>
    </div>
  );
}

export default ChuDeVaTheLoai;

const css = {
  box1: {
    pt: '20px',
  },
  img1: {
    borderRadius: '4px',
    cursor: 'pointer',
  },
  box2: {
    mt: '48px',
  },
  img2: {
    transition: 'transform 0.4s linear',
    _groupHover: {
      transform: 'scale(1.07)',
    },
  },
  box3: {
    borderRadius: '8px',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
  },
  box4: {
    position: 'absolute',
    left: '50%',
    top: ' 50%',
    bottom: 'auto',
    right: 'auto',
    zIndex: '98',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '100%',
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: '700',
  },
  box5: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0 0 15px 15px',
    backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.5) 85%)',
  },
  box6: {
    fontSize: '18px',
    fontWeight: '700',
    mb: '10px',
  },
  img3: {
    w: '19%',
    borderRadius: '4px',
  },
  button: {
    fontWeight: '500',
    fontSize: '12px',
    padding: '18px 24px',
    mt: '30px',
    border: '1px solid hsla(0,0%,100%,0.1)',
    bgColor: 'transparent',
    borderRadius: '999px',
    color: '#fff',
    _hover: { bgColor: 'transparent', opacity: '0.9' },
    ml: '46%',
  },
};
