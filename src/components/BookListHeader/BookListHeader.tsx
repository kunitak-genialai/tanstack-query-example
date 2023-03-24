import { FC } from "react";
import './BookListHeader.css';

export const BookListHeader: FC = () => {
  return (
    <div className="BookListHeader">
      <div className="BookListHeader-column col3">書籍名</div>
      <div className="BookListHeader-column col2">出版社</div>
      <div className="BookListHeader-column col2">著者</div>
      <div className="BookListHeader-column col2">ISINコード</div>
      <div className="BookListHeader-column col1"></div>
    </div>
  );
}