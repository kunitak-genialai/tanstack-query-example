import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBookInfo } from "../hook/useBookInfo";
import { BookInfo } from "../hook/useBookList";
import { Header } from "../components/Header";

const titleStyle = {
  fontWeight: 600
}

export const BookInfoView: FC = () => {
  const params = useParams();
  const [ bookInfo, setBookInfo ] = useState<BookInfo>();
  const { getBookInfo, loading, response } = useBookInfo();

  useEffect(() => {
    const _getBookInfo = async () => {
      await getBookInfo(Number(params.bookId));
    }
    _getBookInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setBookInfo(response);
  }, [response])

  return (
    <>
      <Header title="蔵書情報"/>
      {loading ? <p>...loading</p> :
      <div style={{paddingTop: "20px"}}>
        <div style={{paddingTop: "20px"}}>
          <div>
            <span style={titleStyle}>書籍名</span>
            <p>{bookInfo?.bookName}</p>
          </div>
        </div>
        <div style={{paddingTop: "20px"}}>
          <div>
            <span style={titleStyle}>出版社名</span>
            <p>{bookInfo?.publisherName}</p>
          </div>
        </div>
        <div style={{paddingTop: "20px"}}>
          <div>
            <span style={titleStyle}>著者名</span>
            <p>{bookInfo?.authorName}</p>
          </div>
        </div>
        <div style={{paddingTop: "20px"}}>
          <div>
            <span style={titleStyle}>ISINコード</span>
            <p>{bookInfo?.isin}</p>
          </div>
        </div>
      </div>
      }
    </>
  );
};
