import { FC } from "react";
import { BookInfo, BookInfoList } from "../../hook/useBookList";
import './BookListBody.css';

type Props = {
  bookInfoList: BookInfoList,
  onView: any,
  onEdit: any
}

export const BookListBody: FC<Props> = (props) => {
  return (
    <div className="BookListBody">
      {props.bookInfoList.list.map(
        (info: BookInfo) => {
          return makeBookListBodyRow(info, props);
        }
      )}
    </div>
  );
}

const makeBookListBodyRow = (info: BookInfo, props: Props) => {
  const handleView = () => {
    props.onView(info.bookId);
  }
  const handleEdit = () => {
    props.onEdit(info.bookId);
  }
  return (
    <div className="BookListBody-row" key={info.bookId}>
      <div className="BookListBody-row-column col3">{info.bookName}</div>
      <div className="BookListBody-row-column col2">{info.publisherName}</div>
      <div className="BookListBody-row-column col2">{info.authorName}</div>
      <div className="BookListBody-row-column col2">{info.isin}</div>
      <div className="BookListBody-row-column col1">
        <button onClick={handleView}>照会</button>
        <button onClick={handleEdit}>編集</button>
      </div>
    </div>
  )
}