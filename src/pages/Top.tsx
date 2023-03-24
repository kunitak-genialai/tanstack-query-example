import { FC } from "react";
import { BookList } from "../components/BookList";
import { Header } from "../components/Header";

export const Top: FC = () => {
  return (
    <>
      <Header title="蔵書一覧"/>
      <BookList />
    </>
  );
};
