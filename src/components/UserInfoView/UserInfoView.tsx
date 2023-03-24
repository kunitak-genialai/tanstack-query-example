import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { User } from '../../hook/useUserInfo';
import { client } from '../../HttpClient'

export const UserInfoView: FC = () => {

  const { isLoading, isFetching, data, error } = useQuery<User, Error>({
    queryKey: ["GetUserInfo"],
    queryFn: () => client.get('/GetUserInfo').then(
      (res): Promise<User> => {
        return res.data
      }
    ),
    /* キャッシュが古くなったとみなすまでの時間（ミリ秒） */
    staleTime: 5000,  // Infinity=リフレッシュしない 
    /* キャッシュを保持する時間（ミリ秒）default: 5分 */
    cacheTime: 20000
  });

  if (isLoading || isFetching) return <p>Loading ...</p>;

  return (
    <>
    {data && (
      <>
        <p>ユーザー名:
          <span>{data.user.lastname}</span>
          &nbsp;
          <span>{data.user.firstname}</span>
        </p>
      </>
    )}
    {error && (
      <>
        <div>{error.message}</div>
      </>
    )}
    </>
  );
};
