import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInfoView } from "../UserInfoView";
import './Header.css';

type Props = {
    title: string
}

export const Header: FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="Header-header">
      <div className="Header-header-title">
        <h1>
          {props.title}{`(TanStack Query)`} 
          {pathname === '/top' ? '' : <button onClick={() => navigate("/top")}>蔵書一覧へ</button>}
        </h1>
      </div>
      <div className="Header-header-account">
        <UserInfoView />
        &nbsp;
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </div>
  );  
}
