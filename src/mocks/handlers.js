import { rest } from 'msw';
export const handlers = [
  rest.post('/mock/orders', (req, res, ctx) => {
    return res(
      ctx.json({
        req,
      })
    );
  }),
  rest.get('/mock/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        result: [
          {
            productId: 1,
            productName: '와이셔츠, 셔츠, 교복셔츠',
            price: 1900,
            category: 'clothing',
          },
          {
            productId: 2,
            productName: '블라우스',
            price: 4000,
            category: 'clothing',
          },
          {
            productId: 3,
            productName: '티셔츠, 맨투맨',
            price: 4000,
            category: 'clothing',
          },
          {
            productId: 4,
            productName: '후드티',
            price: 4000,
            category: 'clothing',
          },
          {
            productId: 5,
            productName: '생활빨래 (30L)',
            price: 10800,
            category: 'living',
          },
          {
            productId: 6,
            productName: '카페트 (단모)',
            price: 50000,
            category: 'living',
          },
          {
            productId: 7,
            productName: '커튼',
            price: 17000,
            category: 'living',
          },
          {
            productId: 8,
            productName: '쇼파커버',
            price: 15000,
            category: 'living',
          },
          {
            productId: 9,
            productName: '운동화',
            price: 6000,
            category: 'shoes',
          },
          {
            productId: 10,
            productName: '구두, 로퍼',
            price: 7000,
            category: 'shoes',
          },
          {
            productId: 11,
            productName: '부츠',
            price: 15000,
            category: 'shoes',
          },
          {
            productId: 12,
            productName: '어그부츠',
            price: 20000,
            category: 'shoes',
          },
        ],
      })
    );
  }),
  rest.get('/mock/orders', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        result: [
          {
            id: '200000',
            user: {
              name: '박재현',
              email: 'elice1@test.com',
              password: 'test',
            },
            address: {
              roadAddr: '경기도 의정부시 능곡로70',
              detailAddr: '1동 1호',
              jibun: '111111',
            },
            laundry: {
              laundryId: 'LE20220519',
              name: '우리나라세탁',
              phoneNumber: '02-886-1234',
            },
            pickUpMethod: '사장님 수거',
            status: 'complete',
            notice: '다우니 많이 써주세요',
            deniedReason: '',
            pickUpDateTime: '2022-12-05',
            wishLaundryDateTime: '2022-12-08',
            paymentDateTime: '2022-12-05',
            completedDateTime: '2022-12-08',
            orderProduct: [
              {
                productId: 1,
                productName: '코트',
                price: 12000,
                qty: 1,
              },
              {
                productId: 2,
                productName: '바지',
                price: 2000,
                qty: 2,
              },
              {
                productId: 3,
                productName: '와이셔츠',
                price: 1900,
                qty: 3,
              },
            ],
          },
          {
            id: '200001',
            user: {
              name: '박재현',
              email: 'elice1@test.com',
              password: 'test',
            },
            address: {
              roadAddr: '경기도 의정부시 능곡로70',
              detailAddr: '1동 1호',
              jibun: '111111',
            },
            laundry: {
              laundryId: 'LB20221219',
              name: '엘리스세탁',
              phoneNumber: '031-123-1234',
            },
            pickUpMethod: '사장님 수거',
            status: 'complete',
            notice: '와이셔츠 얼룩 지워주세요',
            deniedReason: '',
            pickUpDateTime: '2022-12-11',
            wishLaundryDateTime: '2022-12-13',
            paymentDateTime: '2022-12-11',
            completedDateTime: '2022-12-13',
            orderProduct: [
              {
                productId: 3,
                productName: '와이셔츠',
                price: 1900,
                qty: 6,
              },
            ],
          },
          {
            id: '200002',
            user: {
              name: '박재현',
              email: 'elice1@test.com',
              password: 'test',
            },
            address: {
              roadAddr: '경기도 의정부시 능곡로70',
              detailAddr: '1동 1호',
              jibun: '111111',
            },
            laundry: {
              laundryId: 'LB20221219',
              name: '엘리스세탁',
              phoneNumber: '031-123-1234',
            },
            pickUpMethod: '사장님 수거',
            status: 'complete',
            notice: '다우니 많이 써주세요',
            deniedReason: '',
            pickUpDateTime: '2022-12-17',
            wishLaundryDateTime: '2022-12-20',
            paymentDateTime: '2022-12-18',
            completedDateTime: '2022-12-20',
            orderProduct: [
              {
                productId: 5,
                productName: '운동화',
                price: 7000,
                qty: 1,
              },
              {
                productId: 2,
                productName: '바지',
                price: 2000,
                qty: 2,
              },
              {
                productId: 3,
                productName: '와이셔츠',
                price: 1900,
                qty: 2,
              },
            ],
          },
          {
            id: '100000',
            user: {
              name: '박재현',
              email: 'elice1@test.com',
              password: 'test',
            },
            address: {
              roadAddr: '경기도 의정부시 능곡로70',
              detailAddr: '1동 1호',
              jibun: '111111',
            },
            laundry: {
              laundryId: 'LB20221219',
              name: '엘리스세탁',
              phoneNumber: '031-123-1234',
            },
            pickUpMethod: '사장님 수거',
            status: 'connect',
            notice: '다우니 많이 써주세요',
            deniedReason: '',
            pickUpDateTime: '2022-12-19',
            wishLaundryDateTime: '2022-12-22',
            paymentDateTime: '',
            completedDateTime: '',
            orderProduct: [
              {
                productId: 1,
                productName: '코트',
                price: 12000,
                qty: 1,
              },
              {
                productId: 2,
                productName: '바지',
                price: 2000,
                qty: 2,
              },
              {
                productId: 3,
                productName: '와이셔츠',
                price: 1900,
                qty: 3,
              },
            ],
          },
          {
            id: '100001',
            user: {
              name: '박재현',
              email: 'elice1@test.com',
              password: 'test',
            },
            address: {
              roadAddr: '경기도 의정부시 능곡로70',
              detailAddr: '1동 1호',
              jibun: '111111',
            },
            laundry: {
              laundryId: 'LB20221219',
              name: '엘리스세탁',
              phoneNumber: '031-123-1234',
            },
            pickUpMethod: '사장님 수거',
            status: 'inspect',
            notice: '다우니 많이 써주세요',
            deniedReason: '',
            pickUpDateTime: '2022-12-19',
            wishLaundryDateTime: '2022-12-22',
            paymentDateTime: '',
            completedDateTime: '',
            orderProduct: [
              {
                productId: 1,
                productName: '코트',
                price: 12000,
                qty: 1,
              },
              {
                productId: 2,
                productName: '바지',
                price: 2000,
                qty: 2,
              },
              {
                productId: 3,
                productName: '와이셔츠',
                price: 1900,
                qty: 3,
              },
            ],
          },
          {
            id: '100002',
            user: {
              name: '박재현',
              email: 'elice1@test.com',
              password: 'test',
            },
            address: {
              roadAddr: '경기도 의정부시 능곡로70',
              detailAddr: '1동 1호',
              jibun: '111111',
            },
            laundry: {
              laundryId: 'LB20221219',
              name: '엘리스세탁',
              phoneNumber: '031-123-1234',
            },
            pickUpMethod: '사장님 수거',
            status: 'laundry',
            notice: '다우니 많이 써주세요',
            deniedReason: '',
            pickUpDateTime: '2022-12-19',
            wishLaundryDateTime: '2022-12-22',
            paymentDateTime: '2022-12-20',
            completedDateTime: '',
            orderProduct: [
              {
                productId: 1,
                productName: '코트',
                price: 12000,
                qty: 1,
              },
              {
                productId: 2,
                productName: '바지',
                price: 2000,
                qty: 2,
              },
              {
                productId: 3,
                productName: '와이셔츠',
                price: 1900,
                qty: 3,
              },
            ],
          },
        ],
      })
    );
  }),
  rest.get('/mock/orders/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (id === '100000') {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          id,
          user: {
            name: '박재현',
            email: 'elice1@test.com',
            password: 'test',
          },
          address: {
            roadAddr: '경기도 의정부시 능곡로70',
            detailAddr: '1동 1호',
            jibun: '111111',
          },
          laundry: {
            laundryId: 'LB20221219',
            name: '엘리스세탁',
            phoneNumber: '031-123-1234',
          },
          pickUpMethod: '사장님 수거',
          status: 'connect',
          notice: '다우니 많이 써주세요',
          deniedReason: '',
          pickUpDateTime: '2022-12-19',
          wishLaundryDateTime: '2022-12-22',
          paymentDateTime: '',
          completedDateTime: '',
          orderProduct: [
            {
              productId: 1,
              productName: '코트',
              price: 12000,
              qty: 1,
            },
            {
              productId: 2,
              productName: '바지',
              price: 2000,
              qty: 2,
            },
            {
              productId: 3,
              productName: '와이셔츠',
              price: 1900,
              qty: 3,
            },
          ],
        })
      );
    }
    if (id === '100001') {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          id,
          user: {
            name: '박재현',
            email: 'elice1@test.com',
            password: 'test',
          },
          address: {
            roadAddr: '경기도 의정부시 능곡로70',
            detailAddr: '1동 1호',
            jibun: '111111',
          },
          laundry: {
            laundryId: 'LB20221219',
            name: '엘리스세탁',
            phoneNumber: '031-123-1234',
          },
          pickUpMethod: '사장님 수거',
          status: 'inspect',
          notice: '다우니 많이 써주세요',
          deniedReason: '',
          pickUpDateTime: '2022-12-19',
          wishLaundryDateTime: '2022-12-22',
          paymentDateTime: '',
          completedDateTime: '',
          orderProduct: [
            {
              productId: 1,
              productName: '코트',
              price: 12000,
              qty: 1,
            },
            {
              productId: 2,
              productName: '바지',
              price: 2000,
              qty: 2,
            },
            {
              productId: 3,
              productName: '와이셔츠',
              price: 1900,
              qty: 3,
            },
          ],
        })
      );
    }
    if (id === '100002') {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          id,
          user: {
            name: '박재현',
            email: 'elice1@test.com',
            password: 'test',
          },
          address: {
            roadAddr: '경기도 의정부시 능곡로70',
            detailAddr: '1동 1호',
            jibun: '111111',
          },
          laundry: {
            laundryId: 'LB20221219',
            name: '엘리스세탁',
            phoneNumber: '031-123-1234',
          },
          pickUpMethod: '사장님 수거',
          status: 'laundry',
          notice: '다우니 많이 써주세요',
          deniedReason: '',
          pickUpDateTime: '2022-12-19',
          wishLaundryDateTime: '2022-12-22',
          paymentDateTime: '2022-12-20',
          completedDateTime: '',
          orderProduct: [
            {
              productId: 1,
              productName: '코트',
              price: 12000,
              qty: 1,
            },
            {
              productId: 2,
              productName: '바지',
              price: 2000,
              qty: 2,
            },
            {
              productId: 3,
              productName: '와이셔츠',
              price: 1900,
              qty: 3,
            },
          ],
        })
      );
    }
    if (id === '100003') {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          id,
          user: {
            name: '박재현',
            email: 'elice1@test.com',
            password: 'test',
          },
          address: {
            roadAddr: '경기도 의정부시 능곡로70',
            detailAddr: '1동 1호',
            jibun: '111111',
          },
          laundry: {
            laundryId: 'LB20221219',
            name: '엘리스세탁',
            phoneNumber: '031-123-1234',
          },
          pickUpMethod: '사장님 수거',
          status: 'arrival',
          notice: '다우니 많이 써주세요',
          deniedReason: '',
          pickUpDateTime: '2022-12-19',
          wishLaundryDateTime: '2022-12-22',
          paymentDateTime: '2022-12-20',
          completedDateTime: '2022-12-22',
          orderProduct: [
            {
              productId: 1,
              productName: '코트',
              price: 12000,
              qty: 1,
            },
            {
              productId: 2,
              productName: '바지',
              price: 2000,
              qty: 2,
            },
            {
              productId: 3,
              productName: '와이셔츠',
              price: 1900,
              qty: 3,
            },
          ],
        })
      );
    }
    if (id === '100004') {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          id,
          user: {
            name: '박재현',
            email: 'elice1@test.com',
            password: 'test',
          },
          address: {
            roadAddr: '경기도 의정부시 능곡로70',
            detailAddr: '1동 1호',
            jibun: '111111',
          },
          laundry: {
            laundryId: 'LB20221219',
            name: '엘리스세탁',
            phoneNumber: '031-123-1234',
          },
          pickUpMethod: '사장님 수거',
          status: 'complete',
          notice: '다우니 많이 써주세요',
          deniedReason: '',
          pickUpDateTime: '2022-12-19',
          wishLaundryDateTime: '2022-12-22',
          paymentDateTime: '2022-12-20',
          completedDateTime: '2022-12-22',
          orderProduct: [
            {
              productId: 1,
              productName: '코트',
              price: 12000,
              qty: 1,
            },
            {
              productId: 2,
              productName: '바지',
              price: 2000,
              qty: 2,
            },
            {
              productId: 3,
              productName: '와이셔츠',
              price: 1900,
              qty: 3,
            },
          ],
        })
      );
    }
    return null;
  }),
  rest.get('/mock/user/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (id === '1') {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          id,
          name: '박재현',
          email: 'elice1@test.com',
          password: 'test',
          phoneNumber: '010-1234-5678',
          bizType: null,
          address: {
            roadAddr: '경기도 의정부시 능곡로70',
            detailAddr: '1동 1호',
            jibun: '111111',
          },
        })
      );
    }
    if (id === '2') {
      return res(
        ctx.json({
          id,
          name: '김영범',
          email: 'elice2@test.com',
          password: 'test',
          phoneNumber: '010-1234-5678',
          bizType: null,
          address: {
            roadAddr: '전라도 전주시 한옥길10',
            detailAddr: '1동 1호',
            jibun: '123345',
          },
        })
      );
    }
    return res(
      ctx.json({
        id,
        name: '안시현',
        email: 'elice3@test.com',
        password: 'test',
        phoneNumber: '010-1234-5678',
        bizType: null,
        address: {
          roadAddr: '서울 강남구 강남로53',
          detailAddr: '1동 1호',
          jibun: '556789',
        },
      })
    );
  }),
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.json({
        produceList: [
          {
            name: '와이셔츠',
            price: 12000,
            category: 'CLOTHING',
          },
          {
            name: '가죽바지',
            price: 10000,
            category: 'CLOTHING',
          },
          {
            name: '운동화',
            price: 6000,
            category: 'SHOES',
          },
          {
            name: '일반이불',
            price: 82000,
            category: 'BEDDING',
          },
          {
            name: '카페트',
            price: 39000,
            category: 'LIVING',
          },
          {
            name: '생활빨래',
            price: 10800,
            category: 'BEDDING',
          },
          {
            name: '블라우스',
            price: 22000,
            category: 'CLOTHING',
          },
        ],
      })
      )
  }),
  rest.post('/login', (req, res, ctx) => {
    if(req.body.email === 'test@naver.com' && req.body.password === 'test'){
      return res(
          ctx.json({
            result : 'token' ,
          })
      )
    }
    return res(
        ctx.json({
          result : 'fail'
        })
    )
  }),
];
