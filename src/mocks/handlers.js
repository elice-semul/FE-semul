import { rest } from 'msw';
export const handlers = [
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
];
