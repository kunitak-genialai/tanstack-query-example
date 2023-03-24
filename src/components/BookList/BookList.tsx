import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookInfoList, useBookList } from "../../hook/useBookList";
import { BookListBody } from "../BookListBody";
import { BookListHeader } from "../BookListHeader";
import './BookList.css';

export const BookList: FC = () => {

  const navigate = useNavigate();
  const [ bookInfoList, setBookInfoList ] = useState<BookInfoList>({ list: [] });
  const { getBookList, loading, response } = useBookList();

  useEffect(() => {
    const _getBookList = async () => {
      await getBookList();
    }
    _getBookList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  useEffect(() => {
    setBookInfoList(response);
  }, [response])

  const handleBookInfoView = (bookId: number) => {
    navigate('/bookinfo/' + bookId + '/view');
  }
  const handleBookInfoEdit = (bookId: number) => {
    navigate('/bookinfo/' + bookId + '/edit');
  }

  return (
    <div className="BookList">
      <BookListHeader />
      {loading ? 
        <p>...loading</p>
        :
        <BookListBody 
          bookInfoList={bookInfoList} 
          onView={handleBookInfoView}
          onEdit={handleBookInfoEdit}
        />
      }
    </div>
  );
};
