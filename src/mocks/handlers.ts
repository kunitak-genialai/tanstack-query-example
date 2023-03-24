// https://www.miracleave.co.jp/contents/1816/front-end-development-msw-mocks/
import { rest } from 'msw';

export const handlers = [
  rest.get('/GetUserInfo', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated');
    if (!authenticatedUser) {
      return res(
        ctx.status(400),
        ctx.delay(500), 
        ctx.body(JSON.stringify([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]))
      );
    }
    return res(
      ctx.status(200),
      ctx.delay(500), 
      ctx.body(JSON.stringify({
        user: {
          auth: authenticatedUser,
          firstname: '太郎',
          lastname: 'サンプル',
        },
      }))
    );
  }),

  rest.post('/Login', async (req, res, ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await req.json();
    const username: string = body.username as string;
    sessionStorage.setItem('is-authenticated', username);
    return res(
      ctx.status(201),
      ctx.body(JSON.stringify({
        username,
      }))
    );
  }),

  rest.get('/GetBookInfo', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated');
    if (!authenticatedUser) {
      return res(
        ctx.status(400),
        ctx.delay(500), 
        ctx.body(JSON.stringify([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]))
      );
    }
    return res(
      ctx.status(200),
      ctx.delay(500), 
      ctx.body(JSON.stringify(bookInfoListInit))
    );
  }),

  rest.get('/GetBookInfo/:bookId', (req, res, ctx) => {
    console.log(req.params.bookId);
    const authenticatedUser = sessionStorage.getItem('is-authenticated');
    if (!authenticatedUser) {
      return res(
        ctx.status(400),
        ctx.delay(500), 
        ctx.body(JSON.stringify([
          {
            message: 'Not authenticated',
            errorType: 'AuthenticationError',
          },
        ]))
      );
    }
    return res(
      ctx.status(200),
      ctx.delay(500), 
      ctx.body(JSON.stringify(
        bookInfoListInit.list.filter(
          (bookInfo) => bookInfo.bookId === Number(req.params.bookId)
        )[0]
      ))
    );
  }),
];

const bookInfoListInit = {
  list: [
    {
        bookId: 1,
        bookName: 'できるポケット Web制作必携 HTML&CSS全事典 改訂3版',
        publisherName: 'インプレス',
        authorName: '加藤善規, できるシリーズ編集部',
        isin: '4295014958'
    },
    {
        bookId: 2,
        bookName: 'スッキリわかるPython入門 (スッキリわかる入門シリーズ)',
        publisherName: 'インプレス',
        authorName: '国本大悟, 須藤秋良, 株式会社フレアリンク',
        isin: '4295006327'
    },
    {
        bookId: 3,
        bookName: 'フロントエンド開発のためのテスト入門 今からでも知っておきたい自動テスト戦略の必須知識',
        publisherName: '翔泳社',
        authorName: '吉井 健文',
        isin: '4798178187'
    },
    {
        bookId: 4,
        bookName: 'フロントエンド開発のためのセキュリティ入門 知らなかったでは済まされない脆弱性対策の必須知識',
        publisherName: '翔泳社',
        authorName: '平野 昌士',
        isin: '4798169471'
    },
    {
        bookId: 5,
        bookName: 'Good Code, Bad Code ～持続可能な開発のためのソフトウェアエンジニア的思考',
        publisherName: '秀和システム',
        authorName: 'Tom Long',
        isin: '4798068160'
    },
    {
        bookId: 6,
        bookName: '売れるコピーライティング単語帖 探しているフレーズが必ず見つかる言葉のアイデア2000',
        publisherName: 'SBクリエイティブ',
        authorName: '神田昌典, 衣田順一',
        isin: '4815603073'
    },
    {
        bookId: 7,
        bookName: '「プロになるためのWeb技術入門」 ――なぜ、あなたはWebシステムを開発できないのか',
        publisherName: '技術評論社',
        authorName: '小森 裕介',
        isin: '4774142352'
    },
    {
        bookId: 8,
        bookName: 'ちいさくはじめるデザインシステム',
        publisherName: 'ビー・エヌ・エヌ',
        authorName: '大塚亜周, 稲葉志奈, 金森 悠, samemaru, & 7 その他',
        isin: '4802512481'
    },
    {
        bookId: 9,
        bookName: '(模擬問題付き)徹底攻略 AWS認定 ソリューションアーキテクト − アソシエイト教科書 第3版［SAA-C03］対応',
        publisherName: 'インプレス',
        authorName: '鳥谷部 昭寛, 宮口 光平, 半田 大樹, & 1 その他',
        isin: '4295016098'
    },
    {
        bookId: 10,
        bookName: '仕組みと使い方がわかる Docker&Kubernetesのきほんのきほん',
        publisherName: 'マイナビ出版',
        authorName: '小笠原種高',
        isin: '4839972745'
    }
  ]
}