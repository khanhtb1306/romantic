/**
 * Configuration for Romantic Landing Page
 */

export const config = {
  // Important dates
  startDate: new Date('2021-11-21'),
  reunionDate: new Date('2026-04-15'),
  
  // Personal info
  lover: {
    name: 'Em',
    nicknames: ['Em yêu', 'Cô gái', 'Baby'],
  },
  
  // Couple photos
  couplePhotos: {
    him: '/romantic/image/him.jpg',
    her: '/romantic/image/her.jpg',
    together: '/romantic/image/ngay_gap_nhau.jpg',
  },
  
  // Photo gallery - Ảnh kỷ niệm
  memories: [
    {
      id: 1,
      title: 'Ngày gặp nhau',
      date: '2021-11-21',
      image: '/romantic/image/ngay_gap_nhau.jpg',
    },
    {
      id: 2,
      title: 'Tam Đảo',
      date: '2022-04-28',
      image: '/romantic/image/tam_dao.jpg',
    },
    {
      id: 3,
      title: 'Cát Bà',
      date: '2022-08-17',
      image: '/romantic/image/cat_ba.jpg',
    },
    {
      id: 4,
      title: 'Gặp lại sau 2 năm',
      date: '2024-07-12',
      image: '/romantic/image/gap_lai_sau_2_nam.jpg',
    },
    {
      id: 5,
      title: 'Ninh Bình',
      date: '2025-10-03',
      image: '/romantic/image/ninh_binh.jpg',
    },
    {
      id: 6,
      title: 'Kỷ niệm',
      date: '2024-07-15',
      image: '/romantic/image/z7594487423185_aeca65413a62ed3a45f814df2bf0650a.jpg',
    },
  ],
  
  // Timeline milestones
  milestones: [
    {
      id: 1,
      date: '2021-11-21',
      title: 'Gặp nhau lần đầu',
      description: 'Ngày định mệnh - Khi hai người lạ trở thành một',
    },
    {
      id: 2,
      date: '2022-04-28',
      title: 'Tam Đảo',
      description: 'Chuyến đi đầu tiên cùng nhau - Bầu trời xanh và nụ cười em',
    },
    {
      id: 3,
      date: '2022-08-17',
      title: 'Cát Bà',
      description: 'Biển xanh, cát trắng và những khoảnh khắc muốn giữ mãi',
    },
    {
      id: 4,
      date: '2024-07-12',
      title: 'Gặp lại sau 2 năm',
      description: 'Ôm em thật chặt sau 730 ngày chờ đợi - Nước mắt hạnh phúc',
    },
    {
      id: 5,
      date: '2024-07-15',
      title: 'Nha Trang',
      description: 'Biển xanh - Nơi tình yêu được sóng vuốt ve',
    },
    {
      id: 6,
      date: '2025-10-03',
      title: 'Ninh Bình',
      description: 'Tràng An - Nơi đất trời gật đầu chúc phúc',
    },
    {
      id: 7,
      date: '2025-10-20',
      title: 'Sapa',
      description: 'Mây và núi, tay trong tay cùng nhau chinh phục mọi đỉnh cao',
    },
  ],
  
  // Love letter content
  letter: {
      greeting: 'Em bé của anh à,',

      content: `Hôm nay là 8/3.

  Anh ngồi viết những dòng này vào một buổi tối tĩnh lặng, khi những ồn ào ngoài kia đã dịu bớt, chỉ còn lại nỗi nhớ em là rõ rệt nhất.

  Yêu xa thực sự là một thử thách kỳ lạ. Có những ngày anh vẫn quay cuồng với công việc, vẫn cười nói với mọi người, nhưng chỉ cần một phút giây ngơi nghỉ, tâm trí anh lại tự động tìm về phía em. Mỗi khi trở về phòng, sự im lặng của bốn bức tường như nhắc nhở anh rằng: anh nhớ em đến nhường nào.

  Đôi khi, anh chẳng ước gì cao sang, chỉ thèm một cái nắm tay thật chặt, một cái tựa đầu bình yên hay đơn giản là hai đứa ngồi cạnh nhau, chẳng cần nói gì cả, chỉ để cảm nhận hơi ấm của đối phương. Những điều giản đơn ấy, với chúng mình, lại là cả một niềm mong mỏi xa xôi.

  Có những ngày nỗi nhớ dài dằng dặc, anh chỉ ước mình có thể "nhảy cóc" qua thời gian, để ngày gặp lại đến thật gần. 

  Nhưng em biết không, nếu được chọn lại ngàn lần, anh vẫn sẽ chọn yêu em. Dù khoảng cách có xa xôi, dù đôi lúc mệt mỏi hay cô đơn đến mức muốn buông xuôi, thì việc có em trong đời vẫn là điều may mắn nhất mà anh có được.

  Cảm ơn em vì đã cùng anh kiên trì, đã bao dung cho những lúc anh không thể ở bên khi em cần nhất. Anh không dám hứa tương lai sẽ trải đầy hoa hồng, nhưng anh hứa sẽ luôn nắm tay em để đi qua mọi bão giông phía trước. 

  Một ngày nào đó, khi khoảng cách chỉ còn là con số không, mình sẽ mỉm cười nhìn lại và thấy rằng: mọi sự chờ đợi này đều hoàn toàn xứng đáng.`,

      closing: 'Chúc em một ngày 8/3 thật dịu dàng. Ở nơi xa này, trái tim anh luôn thuộc về em. ❤️',
    },
  
  // Surprise configuration
  surprise: {
    enabled: true,
    confettiCount: 100, // Tăng nhẹ một chút cho rực rỡ
    duration: 6000,
  },
}
