const movies = [
  {
    title: "타짜",
    year: 2006,
    date: "2006-09-28",
    rating: 6.9,
    audience: 0,
    poster: "/o1a5FULQTObsNbcgjapJtunpFzV.jpg",
    type: "mine",
    rank: null,
    overview: "가구공장에서 일하며 남루한 삶을 사는 고니는 대학보다 가난을 벗어나게 해줄 돈이 우선인 청년. 어느 날 고니는 가구공장 한 켠에서 박무석 일행이 벌이는 화투판에 끼게 되지만, 고니는 그 판에서 3년 동안 모아두었던 돈 전부를 날리고 만다."
  },
  {
    title: "보헤미안 랩소디",
    year: 2018,
    date: "2018-10-31",
    rating: 7.9,
    audience: 0,
    poster: "/xrlVhwi6OKMyQuDebpgaqU2LGju.jpg",
    type: "mine",
    rank: null,
    overview: "공항 수하물 노동자로 일하며 음악의 꿈을 키우던 이민자 출신의 아웃사이더 파록 버사라. 보컬을 구하던 로컬 밴드에 들어가게 되면서 프레디 머큐리라는 이름으로 밴드 퀸을 이끌게 된다."
  },
  {
    title: "악마는 프라다를 입는다 2",
    year: 2026,
    date: "2026-04-29",
    rating: 7.0,
    audience: 0,
    poster: "/28A1VUDML1RzENYNtIU1WkBLT9V.jpg",
    type: "mine",
    rank: null,
    overview: "전 세계 트렌드를 주도해 온 전설적인 패션 매거진 런웨이가 급변하는 미디어 시장 속에서 예기치 못한 위기에 직면한다. 런웨이를 지켜내려는 편집장 미란다와 20년 만에 신임 기획 에디터로 당당히 돌아온 앤디, 그리고 이제는 럭셔리 브랜드 임원이 되어 다시 나타난 에밀리까지 더 화려하고, 치열해진 뉴욕 패션계에서 주도권을 차지하기 위해 벌이는 이들의 새로운 이야기가 펼쳐진다!"
  },
  {
    title: "오디세이",
    year: 2026,
    date: "2026-08-05",
    rating: 8.0,
    audience: 0,
    poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg",
    type: "mine",
    rank: null,
    overview: "10년간 이어진 트로이 전쟁을 승리로 이끈 영웅 '오디세우스'는 왕의 부재를 틈타 침탈과 권력 다툼이 벌어진 왕국에서 그를 기다리고 있는 아내 '페넬로페'와 아들 '텔레마코스'에게 돌아가기 위한 여정에 나선다. 그러나 신들의 분노를 산 그의 귀환 앞에는 거대한 폭풍과 괴물들, 그리고 거스를 수 없는 운명의 시련이 기다리고 있는데…"
  },
  {
    title: "포레스트 검프",
    year: 1994,
    date: "1994-06-23",
    rating: 8.462,
    audience: 0,
    poster: "/l8wvbQQIBV8LBHmx3Wx9xbE2kzt.jpg",
    type: "mine",
    rank: null,
    overview: "불편한 다리, 남들보다 조금 떨어지는 지능을 가진 포레스트 검프는 헌신적인 어머니의 보살핌과 첫사랑 제니와의 만남으로 편견과 괴롭힘 속에서도 따뜻한 마음을 지니고 성장한다. 또래들의 괴롭힘을 피해 도망치던 포레스트는 누구보다 빠르게 달릴 수 있는 자신의 재능을 깨닫는다."
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 7.4,
    audience: 2268255,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "boxoffice",
    rank: 1,
    overview: "어느 날, 광장에서 쉬고 있던 치이카와와 가르마 앞에 얼굴에 전단지를 붙인 토끼가 나타난다. 그곳엔 “특별한 섬으로의 초대”라는 글귀가 적혀 있는데..."
  },
  {
    title: "암살자(들)",
    year: 2026,
    date: "2026-09-23",
    rating: 7.2,
    audience: 3382043,
    poster: "/vxLkqJHsFmrnOg78KoTvwxXDTKo.jpg",
    type: "boxoffice",
    rank: 2,
    overview: "1974년 8월 15일, 제29회 광복절 경축식. 전 국민이 지켜보는 생중계 현장에서 영부인이 저격당하는 초유의 사태가 발생한다."
  },
  {
    title: "실낙원",
    year: 2026,
    date: "2026-10-21",
    rating: 8.0,
    audience: 112191,
    poster: "/6DLBaO4pKBuEXeoHZCCpEVAqyKz.jpg",
    type: "boxoffice",
    rank: 3,
    overview: "9년 전 캠핑스쿨 버스 실종 사건으로 아들을 잃은 류소영은 '낙원의 아이들'이라는 AI 프로그램을 통해 어린 시절의 아들과 만나며 하루하루를 버텨낸다. 그러던 어느 날 죽은 줄로만 알았던 아들 류선우가 9년 만에 집으로 돌아온다."
  },
  {
    title: "타짜: 벨제붑의 노래",
    year: 2026,
    date: "2026-09-23",
    rating: 7.0,
    audience: 2006478,
    poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
    type: "boxoffice",
    rank: 4,
    overview: "타고난 끗발로 사람의 마음을 사로잡는 장태영과 천부적인 머리와 노력으로 스스로를 증명하는 박태영. 학창 시절부터 절친한 친구인 두 사람은 온라인 카지노 사업에 뛰어들며 승승장구하고, 사업의 성공이 커질수록 럭키한 장태만 주목받자, 박태의 질투는 조용히 자라난다."
  },
  {
    title: "클레이페이스",
    year: 2026,
    date: "2026-10-21",
    rating: 7.6,
    audience: 84196,
    poster: "/9l1NuFjel2j89hiuiJbsxfblqjy.jpg",
    type: "boxoffice",
    rank: 5,
    overview: "할리우드의 주연 배우로 유명 영화제 수상을 눈 앞에 두며 꿈을 이루기 직전인 ‘맷 헤이건’. 그러나 한 순간의 실수로 범죄 조직의 타겟이 되어 얼굴이 처참하게 훼손되며 그의 빛나던 인생은 하루 아침에 비극으로 뒤바뀐다."
  }
];