import { useState } from 'react';
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import ReplyItem from "@pages/board/ReplyItem";
import ReplyNew from "@pages/board/ReplyNew";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ReplyList(){

  const axios = useCustomAxios();
  const { _id } = useParams();
  const [data, setData] = useState(null);

  const fetchList = async () => {
    const res = await axios.get(`/posts/${ _id }/replies`, { params: { sort: JSON.stringify({ _id: -1 }) } });
    setData(res.data);
  }

  useEffect(() => {
    fetchList();
  }, []);

  const list = data?.item.map(item => <ReplyItem key={ item._id } item={ item } />);

  return (
    <section className="mb-8">
      <ReplyNew fetchList={ fetchList } />
      <h4 className="mt-8 mb-4 ml-2">댓글 { list?.length || 0 }개</h4>
      { list }
    </section>
  );
}

export default ReplyList;